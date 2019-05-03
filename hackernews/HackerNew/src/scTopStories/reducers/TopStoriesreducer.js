import {FETCH_NEWS, FETCH_SUCCEEDED, FETCH_FAILED} from '../actions/actionTypes';

export const initialState = {
    news: [],
}
const TopStoriesreducer = (state = initialState, action) => {
    switch (action.type) { 
        case FETCH_SUCCEEDED:
        console.log("reducer", action.receivedNews)
            return {...state,news: action.receivedNews};
        case FETCH_FAILED:
            return {...state,news: []};
        default:
            return state;
            
    }
}

export default TopStoriesreducer;