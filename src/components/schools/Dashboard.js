import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
 import { getSchools } from '../../actions/schoolActions'

 class Dashboard extends Component {
     componentDidMount() {

     }
  render() {
      const { user } = this.props.auth;
      const { isLoading, school, schools } = this.props.school;
      

      let dashboardContent;

      if(schools === null || isLoading) {
          dashboardContent = <h4>Loading...</h4>
      } else {
        dashboardContent = <h4>Hello</h4>
      }
      
    return (
      <div>
        <div className='container'>
          <h1>This is the Dashboard</h1>
          {dashboardContent}
          <h3>Welcome {user.name}</h3>
          </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
   getSchools: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  school: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    school: state.school,
    auth: state.auth
})

export default connect(mapStateToProps, {getSchools})(Dashboard)
