import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSchools , deleteSchool } from '../../actions/schoolActions';
import SchoolItem from './SchoolItem';

 class ManageSchools extends Component {

    componentDidMount () {
        this.props.getSchools()
    }

    


  render() {
      const { schools, isLoading } = this.props.school;
      let schoolList;
      console.log(schools);

      if(schools === null || isLoading ) {
        schoolList = <h1>Loading...</h1>
      } else if (schools.length > 0) {
       schoolList = schools.map(school => (
           <SchoolItem key={school._id} school={school} />
       ))
      } else {
        schoolList = <h4>No Schools Found</h4>
      }

    return (
      <div className='mb-5'>
          <h1 className='text-center mt-5 mb-3'>Here are the list of schools</h1>
          {schoolList}
        
      </div>
    )
  }
}

ManageSchools.propTypes = {
    getSchools: PropTypes.func.isRequired,
    deleteSchool: PropTypes.func.isRequired,
    school: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    school: state.school
})

export default connect(mapStateToProps, { getSchools , deleteSchool })(ManageSchools)
