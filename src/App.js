import React, { Component } from 'react';
 import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser} from './actions/authActions';
import store from './store';

import PrivateRouter from './components/PrivateRouter';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Jumbotron from './components/layout/Jumbotron';
import Dashboard from './components/schools/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AddSchool from './components/schools/AddSchool';
import Features from './components/home/Features';
import ManageSchools from './components/schools/ManageSchools';
import DisplaySchools from './components/schools/DisplaySchools';
import EditSchool from './components/schools/EditSchool';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store= {store}>
      <Router>
      <div>
          <NavBar />
          
          <Route exact path='/' component={Jumbotron} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/displaySchools' component={DisplaySchools} />
          <Switch>
              <PrivateRouter exact path='/dashboard' component={Dashboard} />
              <PrivateRouter exact path='/addSchool' component={AddSchool} />
              <PrivateRouter exact path='/manageSchools' component={ManageSchools} />
              <PrivateRouter exact path='/editSchool/:id' component={EditSchool} />
          </Switch>

          <Footer />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;