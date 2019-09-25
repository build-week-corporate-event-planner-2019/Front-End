import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper"></div>
                <h1>Create Account</h1>
                <form onSubmit= {this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        className="" 
                        placeholder="First Name" 
                        name="firstName" 
                        noValidate
                        onChange={this.handleChange}/>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Login


// import React from "react";
// // import { axiosWithAuth } from '../utils/axiosWithAuth';


// class Login extends React.Component {
//     // make a post request to retrieve a token from the api
//     // when you have handled the token, navigate to the BubblePage route
//     state = {
//         credentials: {
//             username: '',
//             password: ''
//         }
//     };

//     handleChange = e => {
//         this.setState({
//             credentials: {
//                 ...this.state.credentials,
//                 [e.target.name]: e.target.value
//             }
//         });
//     };

//     // login = e => {
//     //     e.preventDefault();
//     //     // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
//     //     axiosWithAuth()
//     //         .post('/api/login', this.state.credentials)
//     //         .then(res => {
//     //             localStorage.setItem('token', res.data.payload);
//     //             // redirect to the apps main page?
//     //             this.props.history.push('/protected');
//     //         })
//     //         .catch(err => console.log(err));
//     // };

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.login}>
//                     <input
//                         type="text"
//                         name="username"
//                         value={this.state.credentials.username}
//                         onChange={this.handleChange}
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         value={this.state.credentials.password}
//                         onChange={this.handleChange}
//                     />
//                     <button>Log in</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Login;