import React from "react";
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  // IF USING HOOKS
  //   const [credentials, setCredentials] = useState({username: "", password: ""});

  //   handleChange = e => {
  //       setCredentials({
  //           ...credentials,
  //           [e.target.name]: e.target.value
  //       })
  //   }


  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axios
      .post(`https://corporate-event-planner-be.herokuapp.com/api/users/login`, this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // redirect to the apps main page?
        this.props.history.push("/events-home");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login-page">
        <h1 className="login-header">Welcome...Log-In!</h1>

        <form onSubmit={this.login}>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <br />
          <div className="password-input">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button className="login-btn">Log in</button>
        </form>

      </div>
    );
  }
}

export default Login;
