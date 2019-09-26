import React from "react";
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from "axios";

class AddEvent extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    eventinfo: {
      name: "",
      description: "",
      start_date: "",
      end_date: "",
      location: "",
      budget: ""
    }
  };

  handleChange = e => {
    this.setState({
      eventinfo: {
        ...this.state.eventinfo,
        [e.target.name]: e.target.value
      }
    });
  };

  addevent = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axios
      .post(
        `https://corporate-event-planner-be.herokuapp.com/api/events`,
        this.state.eventinfo
      )
      //   .then(res => {
      //     localStorage.setItem("token", res.data.token);
      //     localStorage.setItem("user_id", res.data.user_id);
      //     // redirect to the apps main page?
      //     this.props.history.push("/events-home");
      //   })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addevent}>
          <label>Event Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.eventinfo.name}
            onChange={this.handleChange}
          />
          <br />
          <label>Event Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.eventinfo.description}
            onChange={this.handleChange}
          />
          <br />
          <label>Event Start: </label>
          <input
            type="text"
            name="start_date"
            value={this.state.eventinfo.start_date}
            onChange={this.handleChange}
          />
          <br />
          <label>Event End: </label>
          <input
            type="text"
            name="end_date"
            value={this.state.eventinfo.end_date}
            onChange={this.handleChange}
          />
          <br />
          <label>Location: </label>
          <input
            type="text"
            name="location"
            value={this.state.eventinfo.location}
            onChange={this.handleChange}
          />
          <br />
          <label>Budget: </label>
          <input
            type="text"
            name="budget"
            value={this.state.eventinfo.budget}
            onChange={this.handleChange}
          />
          <button>Add Event</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
