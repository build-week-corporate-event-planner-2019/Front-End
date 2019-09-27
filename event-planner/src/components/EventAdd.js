import React from "react";
import { connect } from "react-redux";
import { addEvent } from '../actions/actions';

class AddEvent extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    eventinfo: {
      user_id: 0,
      name: "",
      description: "",
      start_date: "",
      end_date: "",
      location: "",
      budget: ""
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      eventinfo: {
        ...this.state.eventinfo,
        [e.target.name]: e.target.value
      }
    });
  };

  addEvent = e => {
    //e.preventDefault();
    this.props.addEvent(this.state.eventinfo);
    this.setState({
      eventinfo: {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        location: "",
        budget: ""
      }
    })
    this.props.history.push('/events');
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      eventinfo: {
        user_id: localStorage.getItem('user_id')
      }
    })
  }

  render() {
    console.log('this is props', this.props);
    return (
      <div className="event-home">
        <form className="add-event-form" onSubmit={this.addEvent}>
          <div className="event-name-field">
            <label>Event Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.eventinfo.name}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="event-description-field">
            <label>Event Description: </label>
            <input
              type="text"
              name="description"
              value={this.state.eventinfo.description}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="event-start-field">
            <label>Event Start: </label>
            <input
              type="text"
              name="start_date"
              value={this.state.eventinfo.start_date}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="event-end-field">
            <label>Event End: </label>
            <input
              type="text"
              name="end_date"
              value={this.state.eventinfo.end_date}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="event-location-field">
            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={this.state.eventinfo.location}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="event-budget-field">
            <label>Budget: </label>
            <input
              type="text"
              name="budget"
              value={this.state.eventinfo.budget}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <button onClick={() => this.addEvent()} className="add-btn">Add Event</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event
})

export default connect(
  mapStateToProps,
  { addEvent }
)(AddEvent);
