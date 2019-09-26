import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Signup extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      name: "",
      email: "",
      company: "",
      role: "",
      password: ""
    },
    confirmpassword: ""
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleChangeConfirm = e => {
    this.setState({ ...this.state, confirmpassword: e.target.value });
  }

  signup = e => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      // make API call
      //   axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
      axiosWithAuth()
        .post(`/users/register`, this.state.credentials)
        .then(res => {
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user_id);
          // redirect to the apps main page?
          this.props.history.push("/events-home");
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <div className="signup-page">

        <h1 className="signup-header"><span>Sign-Up Form</span></h1>

        <div className='signup-form'>
          <form onSubmit={this.signup}>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={this.state.credentials.name}
              onChange={this.handleChange}
            />
            <br />
            Email
            <br />
            <input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <br />
            Company
            <br />
            <input
              type="text"
              name="company"
              value={this.state.credentials.company}
              onChange={this.handleChange}
              required="must enter"
            />
            <br />
            Role
            <br />
            <input
              type="text"
              name="role"
              value={this.state.credentials.role}
              onChange={this.handleChange}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <br />
            Confirm password
            <br />
            <input
              type="password"
              name="confirmpassword"
              value={this.state.confirmpassword}
              onChange={this.handleChangeConfirm}
            />
            <br />
            <button className="signup-btn">Sign Up!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
