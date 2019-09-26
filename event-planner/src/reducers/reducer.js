import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE, GET_EVENTBYID, GET_EVENTBYID_SUCCESS, GET_EVENTBYID_FAILURE, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, DELETE_EVENT, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE } from '../actions/actions';

const initialState = {
    events: [],
    event:{},
    fetchingEvents: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        //get all events
        case GET_EVENTS:
            return {
                ...state,
                fetchingEvents: true
            }
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                fetchingEvents: false,
                events: action.payload
            }
        case GET_EVENTS_FAILURE:
            return {
                ...state,
                fetchingEvents: false,
                error: action.payload
            }
            //get event by id
        case GET_EVENTBYID:
            return {
                ...state,
                fetchingEvents: true
            }
        case GET_EVENTBYID_SUCCESS:
            return {
                ...state,
                fetchingEvents: false,
                event: action.payload
            }
        case GET_EVENTBYID_FAILURE:
            return {
                ...state,
                fetchingEvents: false,
                error: action.payload
            }
            //add event
        case ADD_EVENT:
            return {
                ...state
            }
        case ADD_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload
            }
        case ADD_EVENT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
            //delete event by id
        case DELETE_EVENT:
            return {
                ...state
            }
        case DELETE_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload
            }
        case DELETE_EVENT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}