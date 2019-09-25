import React, { Component } from 'react'

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid=false)
    });
return valid;
}

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: null,
             lastName: null,
             email: null,
             password: null,
             formErrors:{
                 firstName:"",
                 lastName:"",
                 email:"",
                 password:"",
             }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
if (formValid(this.state.formErrors)){
    console.log(`
    --SUBMITTING--
    First Name: ${this.state.firstName}
    Last Name: ${this.state.lastName}
    Email: ${this.state.email}
    Password: ${this.state.password}
    `)
} else{
    console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
}
    };
    
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper"></div>
                <h1>Sign Up</h1>
                <form onSubmit= {this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        className="" 
                        placeholder="First Name" 
                        
                        name="firstName" 
                        noValidate
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                        type="text" 
                        className="" 
                        placeholder="Last Name" 
                         
                        name="lastName" 
                        noValidate
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        className="" 
                        placeholder="Email" 
                        
                        name="email" 
                        noValidate
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        className="" 
                        placeholder="Password" 
                         
                        name="password" 
                        noValidate
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                   

                      </div>
                </form>
                
            </div>
                
        
        )
    }
}

export default Register
