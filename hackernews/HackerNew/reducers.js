import {combineReducers} from 'redux';
import TopStoriesreducer from '../HackerNews1/src/scTopStories/reducers/TopStoriesreducer';
import TopStoriesreducer2 from '../HackerNews1/src/scTopStories/reducers/TopStoriesreducer2';

const allReducers = combineReducers({
    TopStoriesreducer,
    TopStoriesreducer2,
})
export default allReducers;