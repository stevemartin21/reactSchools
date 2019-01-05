import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

 class Login extends Component {

  constructor(){
    super()
    this.state = {
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
 

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
      
      email: this.state.email,
      password: this.state.password
    }

    console.log(newUser);
    this.props.loginUser(newUser);
  }



  render() {
    const { errors } = this.state;
    return (
      <div>

<section  >
        <div className='container mt-5 mb-5  ' >

              <div className='card '>
                <h1 className='text-center elegant-color text-white pt-3 pb-3'>Login</h1>
                <h5 className='text-center  '>Historic Utah Schools</h5>
              <div className='card-body'>

                  <form onSubmit={this.onSubmit}>
                      
                      <div className="md-form">
                        <input type="text" 
                        id="form2"
                        className={classnames('form-control form-control-lg', {
                          'is-invalid': errors.email
                        })}
                          placeholder='Email'
                          name='email'
                          value={this.state.email}
                          onChange={this.onChange}
                          
                          />
                           {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
                      </div>
                      <div className="md-form">
                        <input type="text"
                         id="form3"
                         className={classnames('form-control form-control-lg', {
                          'is-invalid': errors.password
                        })} 
                           placeholder='Password'
                           name='password'
                           value={this.state.password}
                           onChange={this.onChange}
                           
                           />
                           {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                          )}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { loginUser })(Login);
