import React, { Component } from 'react'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

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

    handleChange = e => {
        e.preventDefault();
        const { name,value } = e.target;
        
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName': 
            formErrors.firstName = value.length < 3 && value.length > 0 
            ? 'minimum 3 characters required'
            :"";
            break;

            case 'lastName': 
            formErrors.lastName = value.length < 3 && value.length > 0 
            ? 'minimum 3 characters required'
            :"";
            break;

            case 'email': 
            formErrors.email = 
            emailRegex.test(value) && value.length > 0 
            ? ''
            :"invalid email address";
            break;

            case 'password': 
            formErrors.password = value.length < 6 && value.length > 0 
            ? 'minimum 6 characters required'
            :"";
            break;
            default:
            break;
        }

        this.setState({
            formErrors, [name]: value }, () => console.log(this.state)
       );
    } ;
    
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
