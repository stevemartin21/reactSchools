import React, { Component } from 'react';
import grafton from '../../images/grafton.jpg';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

 class Register extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }


  componentWillReceiveProps (nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    console.log(newUser);

  
  this.props.registerUser(newUser, this.props.history);
  }
  

  

  
  render() {

    const { errors } = this.state;
    console.log(errors);

    const { user } = this.props.auth;
    
    return (
      <div  >
        <section  >
          { user ? user.name: null}
        <div className='container mt-5 mb-5  ' >

              <div className='card '>
                <h1 className='text-center elegant-color text-white pt-3 pb-3'>Register</h1>
                <h5 className='text-center  '>Historic Utah Schools</h5>
              <div className='card-body'>

                  <form onSubmit={this.onSubmit}>
                      <div className="md-form">
                        <input type="text" 
                        id="form1" 
                        className={classnames('form-control', {
                          'is-invalid': errors.name
                        })} 
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.onChange}
                         />
                         {errors.name &&
                           (<div className='invalid-feedback'>{errors.name}</div>)}
                      </div>
                      <div className="md-form">
                        <input type="text"
                         id="form2"
                         className={classnames('form-control', {
                          'is-invalid': errors.email
                        })}
                           placeholder='Email'
                           name='email'
                            value={this.state.email}
                            onChange={this.onChange}
                           
                           />
                            {errors.email &&
                           (<div className='invalid-feedback'>{errors.email}</div>)}
                      </div>
                      <div className="md-form">
                        <input type="text" 
                        id="form3"
                        className={classnames('form-control', {
                          'is-invalid': errors.password
                        })} 
                         placeholder='Password'
                         name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                         
                          />
                           {errors.password &&
                           (<div className='invalid-feedback'>{errors.password}</div>)}
                      </div>
                      <input type="submit"  className="btn btn-primary" value='Submit' />
                    </form>
              </div>
              </div>
          </div>
          </section>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps, {registerUser})(withRouter(Register));