import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribe = null

  componentDidMount(){
    this.unSubscribe =  auth.onAuthStateChanged( async userAuth => {
      // this.setState({currentUser: user});
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        });
        
      }
      else{
        this.setState({currentUser: userAuth})
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
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/home">
            <HomePage></HomePage>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/signIn">
              <SignInAndSignUp></SignInAndSignUp>
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

export default App;
