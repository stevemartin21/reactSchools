import React, { Component } from 'react';
import { Link } from 'react-router-dom';


 class NavBar extends Component {
  render() {
    return (
      <div>
            
<nav className="navbar navbar-expand-lg navbar-dark elegant-color">

  
  <Link className="navbar-brand text-white" to='/' >Historic Utah Schools</Link>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="basicExampleNav">

    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link"  to='/' >Home
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/schools' >Search Schools</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/register' >Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/login' >Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/contact'>Contact</Link>
      </li>
    </ul>
  </div>
</nav>  
      </div>
    )
  }
}

export default NavBar;
