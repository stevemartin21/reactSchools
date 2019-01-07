import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';

import isEmpty from '../../validation/is-empty';
import { deleteSchool } from '../../actions/schoolActions';
import { connect } from 'react-redux';


class SchoolItem extends Component {
  onDeleteClick(id,  ) {
    this.props.deleteSchool(id)
  }


  render() {
      const { school } = this.props
    return (
      <div className='container'>
         
                <table className="table table-striped table-hover table-fixed ">

                
                <thead>
                    <tr>

                    <th>Title</th>
                    <th>Year</th>
                    <th>County</th>
                    <th>City</th>
                    <th>History</th>
                    <th>School Type</th>
                    
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                    <td>{school.title}</td>
                    <td>{school.year}</td>
                    <td>{school.city}</td>
                    <td>{school.county}</td>
                    <td>{school.type}</td>
                    <td className='btn btn-success'><Link to={`/editSchool/${school._id}`} className='text-white'>Edit</Link></td>
                    <td className='btn btn-danger' onClick={this.onDeleteClick.bind(this, school._id)}>Delete</td>
                    </tr>
                      
                </tbody>
                
                </table> 
      </div>
    )
  }
}

SchoolItem.propTypes = {
  deleteSchool: PropTypes.func.isRequired
}

export default connect(null , {deleteSchool})(withRouter(SchoolItem))
