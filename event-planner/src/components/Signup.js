import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Signup extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      name: "",
      email: "",
      company: "",
      role: "",
      password: "",
      confirmpassword: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // make API call
      //   axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
      axiosWithAuth()
        .post(`/users/signup`, this.state.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          // redirect to the apps main page?
          this.props.history.push("/protected");
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.signup}>
          <input
            type="text"
            name="name"
            value={this.state.credentials.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="company"
            value={this.state.credentials.company}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="confirmpassword"
            value={this.state.credentials.confirmpassword}
            onChange={this.handleChange}
          />
          <Link to={`/protected`}>
            <button>Sign Up!</button>
          </Link>
        {/* // <Link to={`/events/${this.state.user.id}`}>
        //   <button>Update</button>
        // </Link> */}
        </form>
      </div>
    );
  }
}

export default Signup;
