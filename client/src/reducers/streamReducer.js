import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_STREAM:
            //redux requierment of always returning a new obj.
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;

        /*
        how _.mapKeys works:

        const colors = {
            { id: '3' },
            { id: '5' },
            { id: '7'}
        }

        _.mapKeys(colors, "id" )

        {"3":{"id":3},"5":{"id":5},"7":{"id":7}}

        */
    }
}

/*
Reducers: As we already know, actions only tell what to do, but they don't tell how to do,
 so reducers are the pure functions that take the current state and action and return the 
 new state and tell the store how to do.
*/