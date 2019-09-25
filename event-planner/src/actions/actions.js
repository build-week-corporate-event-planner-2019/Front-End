import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

const URL = 'https://corporate-event-planner-be.herokuapp.com/api/events';

export const getEvents = () => dispatch => {
    dispatch({ type: GET_EVENTS });

    axiosWithAuth()
        .get(URL)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.err(err);
            dispatch({ type: GET_EVENTS_FAILURE, payload: err });
        })
}

export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

export const addEvent = event => dispatch => {
    dispatch({ type: ADD_EVENT });

    axiosWithAuth()
        .post(URL, event)
        .then(res => {
            dispatch({ type: ADD_EVENT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ADD_EVENT_FAILURE, payload: err });
        })
}