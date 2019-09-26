import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

export const getEvents = () => dispatch => {
    dispatch({ type: GET_EVENTS });

    axiosWithAuth()
        .get('/events')
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_EVENTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_EVENTS_FAILURE, payload: err });
        })
}

export const GET_EVENTBYID = 'GET_EVENTBYID';
export const GET_EVENTBYID_SUCCESS = 'GET_EVENTBYID_SUCCESS';
export const GET_EVENTBYID_FAILURE = 'GET_EVENTBYID_FAILURE';

export const getEventById = (id) => dispatch => {
    dispatch({ type: GET_EVENTBYID });

    axiosWithAuth()
        .get(`/events/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_EVENTBYID_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: GET_EVENTBYID_FAILURE, payload: err });
        })
}

export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

export const addEvent = event => dispatch => {
    dispatch({ type: ADD_EVENT });

    axiosWithAuth()
        .post(`/events`, event)
        .then(res => {
            dispatch({ type: ADD_EVENT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ADD_EVENT_FAILURE, payload: err });
        })
}

export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';

export const deleteEvent = (id) => dispatch => {
    console.log(`event id: ${id}`);
    dispatch({ type: DELETE_EVENT });
    //const id = match.params.id

    axiosWithAuth()
        .delete(`/events/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
            //history.push('/events-home');
        })
        .catch(err => {
            console.error('error', err)
            dispatch({ type: DELETE_EVENT_FAILURE, payload: err });
        })
}