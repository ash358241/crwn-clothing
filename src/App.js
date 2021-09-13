import logo from './logo.svg';
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

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/home">
          <HomePage></HomePage>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
          <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
