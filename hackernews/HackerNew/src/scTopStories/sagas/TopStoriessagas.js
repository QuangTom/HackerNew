import {FETCH_FAILED,FETCH_NEWS,FETCH_SUCCEEDED,FETCH_SINGLE_NEW,FETCH_SINGLE_NEW_SUCCEEDED,FETCH_SINGLE_NEW_FAILED} from '../actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Api} from './Api';
import {Api2} from './Api';

function* fetchNews(){
    try {
        const receivedNews = yield  call(Api.getNewsFromApi);
        yield put ({ type: FETCH_SUCCEEDED, receivedNews: receivedNews});
    } catch(error){
        yield put ({type: FETCH_FAILED, error});
    }
}
function* fetchSingleNew(){
    try {
        const receivedSingleNew = yield  call(Api2.getSingleNewFromApi);
        yield put ({ type: FETCH_SINGLE_NEW_SUCCEEDED, receivedSingleNew: receivedSingleNew});
    } catch(error){
        yield put ({type: FETCH_SINGLE_NEW_FAILED, error});
    }
}
export function* watchFetchNews(){
    yield takeLatest(FETCH_NEWS, fetchNews);
}
export function* watchFetchSingleNew(){
    yield takeLatest(FETCH_SINGLE_NEW, fetchSingleNew);
}
