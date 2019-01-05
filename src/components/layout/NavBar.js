import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';



 class NavBar extends Component {
  onLogOutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link"  to='/' >Dashboard
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/schools' >Manage Schools Schools</Link>
      </li>
    
      <li className="nav-item">
        <a className="nav-link" onClick={this.onLogOutClick.bind(this)}  >Logout</a>
      </li>
    </ul>
    );

    const guestLinks = (
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
    )

     
    return (
      <div>
            
<nav className="navbar navbar-expand-lg navbar-dark elegant-color">

  
  <Link className="navbar-brand text-white" to='/' >Historic Utah Schools</Link>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="basicExampleNav">

  {isAuthenticated ? authLinks : guestLinks}
   
  </div>
</nav>  
      </div>
    )
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
