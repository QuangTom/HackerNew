import {call, all} from 'redux-saga/effects';
import {watchFetchNews, watchFetchSingleNew} from '../HackerNews1/src/scTopStories/sagas/TopStoriessagas';

export default function* rootSaga() {
    yield call(watchFetchNews);
    yield call(watchFetchSingleNew);
}
