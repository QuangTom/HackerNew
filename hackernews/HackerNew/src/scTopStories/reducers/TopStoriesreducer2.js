import {FETCH_SINGLE_NEW, FETCH_SINGLE_NEW_SUCCEEDED, FETCH_SINGLE_NEW_FAILED} from '../actions/actionTypes';

export const initialState = {
    news2: [],
}
const TopStoriesreducer2 = (state = initialState, action) => {
    switch (action.type) { 
        case FETCH_SINGLE_NEW_SUCCEEDED:
            return {...state,news2: action.receivedSingleNew};
        case FETCH_SINGLE_NEW_FAILED:
            return {...state,news2: []};
        default:
            return state;
            
    }
}

export default TopStoriesreducer2;