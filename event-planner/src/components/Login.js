import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
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
    axiosWithAuth()
      .post(`/users/login`, this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        // redirect to the apps main page?
        this.props.history.push("/events");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
