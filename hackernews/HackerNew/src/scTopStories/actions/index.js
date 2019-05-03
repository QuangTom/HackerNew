import {FETCH_NEWS, FETCH_SUCCEEDED, FETCH_FAILED, FETCH_SINGLE_NEW, FETCH_SINGLE_NEW_SUCCEEDED, FETCH_SINGLE_NEW_FAILED} from '../actions/actionTypes';

export const fetchNewsAction = (sort) => {
    return {
        type: FETCH_NEWS,
        sort
    }
}
export const fetchSuccessAction = (receivedNews) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedNews
    }
}
export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}
export const fetchSingleNewAction = () => {
    return{
    type: FETCH_SINGLE_NEW,
    }
}
export const fetchSuccessSingleNewAction = (receivedSingleNew) => {
    return{
        type: FETCH_SINGLE_NEW_SUCCEEDED,
        receivedSingleNew
    }
}
export const fetchFailedSingleNewAction = (error) => {
    return{
        type: FETCH_SINGLE_NEW_FAILED,
        error
    }
}