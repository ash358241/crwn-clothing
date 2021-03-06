import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import {setCurrentUser} from"./redux/user/user.actions";
import {selectCurrentUser} from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/Checkout/Checkout';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unSubscribe = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribe =  auth.onAuthStateChanged( async userAuth => {
      // this.setState({currentUser: user});
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          }, () => console.log(this.state))
        });
        
      }
      else{
        setCurrentUser(userAuth)
      }
      console.log(userAuth);
    })
  }

  componentWillUnmount(){
    this.unSubscribe();
  }

  render(){
    return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route path="/home">
            <HomePage></HomePage>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)}>
            </Route>
            <Route exact path="/">
            <HomePage></HomePage>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
 
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
