import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper"></div>
                <h1>Sign In</h1>
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
                   

                      
                </form>
                
            </div>
                
        
        )
    }
}

export default Register
