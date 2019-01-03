import React, { Component } from 'react';
 import { BrowserRouter as Router , Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Jumbotron from './components/layout/Jumbotron';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Features from './components/home/Features';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <NavBar />
          
          <Route exact path='/' component={Jumbotron} />
          
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          

          <Footer />

      </div>
      </Router>
    );
  }
}

export default App;