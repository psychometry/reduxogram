import {createStore, combineReducers} from 'redux';
//import data
import comments from './data/comments';
import posts from './data/posts';


//import reducers
import post_reducer from './reducers/post-reducer';
import comments_reducer from './reducers/comments-reducer';
const defaultState={
  posts,
  comments,
};

//build history and middleware for intercepting navagation action

const rootReducer=combineReducers({posts:post_reducer, comments:comments_reducer});

const store=createStore(rootReducer,defaultState);
export default store;
