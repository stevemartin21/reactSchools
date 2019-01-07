import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateSchool } from '../../actions/schoolActions';
import PropTypes from 'prop-types';
import classnames from 'classnames';


 class EditSchool extends Component {

    constructor(){
        super()
        this.state = {
            title: '',
            year: '',
            city: '',
            county: '',
            history: '',
            schoolType: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount () {
        const { id } =  this.props.match.params;
        axios.get(`http://localhost:3001/read/school/${id}`)
          .then(school => {
            this.setState({
              title: school.data.title,
            year: school.data.year,
            city: school.data.city,
            county: school.data.county,
            history: school.data.history,
            schoolType: school.data.schoolType
            })
            console.log(this.state);
            console.log(school);
          })
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      onSubmit(e) {
        const { id } =  this.props.match.params;
        e.preventDefault();
    
        const schoolData = {
          
          title: this.state.title,
          year: this.state.year,
          city: this.state.city,
          county: this.state.county,
          history: this.state.history,
          schoolType: this.state.schoolType
  
        }
    
        console.log(schoolData);
        this.props.updateSchool(id, schoolData)
       //  this.props.loginUser(newUser);
      }
  
  render() {
    return (
        <div>
        <div className='container mt-5 mb-5  ' >

<div className='card '>
<h1 className='text-center elegant-color text-white pt-3 pb-3'>Edit School</h1>
<h5 className='text-center  '>Historic Utah Schools</h5>
<div className='card-body'>

<form onSubmit={this.onSubmit}>
    <div className="md-form">
      <input type="text" 
      id="form2"
      className={classnames('form-control', {
       //  'is-invalid': errors.name
      })} 
      placeholder='Title'
      name='title'
      value={this.state.title}
      onChange={this.onChange}
       />
    </div>
   
    <div className="md-form">
      <input type="text"
       id='text2'
       className={classnames('form-control', {
        // 'is-invalid': errors.email
      })}
         placeholder='Year'
         name='year'
          value={this.state.year}
          onChange={this.onChange}
         
         />
          
    </div>
    <div className="md-form">
      <input type="text" 
      
      className={classnames('form-control', {
       // 'is-invalid': errors.password
      })} 
       placeholder='City'
       name='city'
      value={this.state.city}
      onChange={this.onChange}
       
        />
         
    </div>

    <div className="md-form">
      <input type="text" 
      
      className={classnames('form-control', {
       // 'is-invalid': errors.password
      })} 
       placeholder='County'
       name='county'
      value={this.state.county}
      onChange={this.onChange}
       
        />
         
    </div>

    <div className="md-form">
      <input type="text" 
     
      className={classnames('form-control', {
       // 'is-invalid': errors.password
      })} 
       placeholder='History'
       name='history'
      value={this.state.history}
      onChange={this.onChange}
       
        />
         
    </div>

    <div>
    <select className="browser-default custom-select mt-3 mb-3"
    name='schoolType'
    value={this.state.schoolType}
    onChange={this.onChange}>
      <option>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
    <input type="submit"  className="btn btn-primary" value='Submit' />
  </form>
</div>
</div>
</div>
    
  </div>
    )
  }
}

EditSchool.propTypes = {
    school: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    editSchool: PropTypes.func.isRequired
}

const mapStateToProps = state =>  ({
    school: state.school,
    errors: state.errors
})

export default connect(mapStateToProps, {updateSchool})(EditSchool)
