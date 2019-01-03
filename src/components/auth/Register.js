import React, { Component } from 'react';
import grafton from '../../images/grafton.jpg';
import axios from 'axios';

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

    axios.post('http://localhost:3001/create/user', newUser)
      .then(res => console.log(res.data))
  }

  
  render() {
    return (
      <div  >
        <section  >
        <div className='container mt-5 mb-5  ' >

              <div className='card '>
                <h1 className='text-center elegant-color text-white pt-3 pb-3'>Register</h1>
                <h5 className='text-center  '>Historic Utah Schools</h5>
              <div className='card-body'>

                  <form onSubmit={this.onSubmit}>
                      <div className="md-form">
                        <input type="text" 
                        id="form1" 
                        className="form-control" 
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.onChange}
                         />
                      </div>
                      <div className="md-form">
                        <input type="text"
                         id="form2"
                          className="form-control"
                           placeholder='Email'
                           name='email'
                            value={this.state.email}
                            onChange={this.onChange}
                           
                           />
                      </div>
                      <div className="md-form">
                        <input type="text" 
                        id="form3"
                         className="form-control" 
                         placeholder='Password'
                         name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                         
                          />
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


export default Register;