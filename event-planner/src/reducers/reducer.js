import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE, GET_EVENTBYID, GET_EVENTBYID_SUCCESS, GET_EVENTBYID_FAILURE } from '../actions/actions';

const initialState = {
    events: [],
    event:{},
    fetchingEvents: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}