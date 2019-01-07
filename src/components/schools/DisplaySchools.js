import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSchools } from '../../actions/schoolActions';

 class DisplaySchools extends Component {
     componentDidMount () { 
        console.log('Did Mount 1')
         this.props.getSchools();
         console.log('Did Mount 2')
     }
  render() {
      const { schools , isLoading } = this.props.school;
      let schoolList;
      if(schoolList === null || isLoading ) {
          schoolList = <h1>Still Loading</h1>
      } else if (schools.length > 0 ) {
        schoolList = schools.map(school => (
            <div className='card mt-3 mb-3' key={school._id}>

                        <div className='card-body'>

                            <div className='card-title'>{school.title}</div>
                            <ul className='list-group'>
                                <li className='list-group-item'>{school.year}</li>
                                <li className='list-group-item'>{school.city}</li>
                                <li className='list-group-item'>{school.county}</li>
                                <li className='list-group-item'>{school.history}</li>
                                <li className='list-group-item'>{school.schoolType}</li>
                            
                            </ul>
                        
                        </div>
        
                    </div>
        )) 
      } else {
        schoolList =  <h1>No Schools Found</h1>
      }
    return (
      <div className='container'>
          <h1 className='mt-5 mb-5 text-center'>List of Historic Schools</h1>
          {schoolList}
      </div>
    )
  }
}

DisplaySchools.propTypes = {
    getSchools: PropTypes.func.isRequired,
    school: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    school: state.school
})

export default connect(mapStateToProps, { getSchools })(DisplaySchools)
