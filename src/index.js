import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Main from './components/main';
import * as actionCreators from './actions/actionCreators';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';

const mapStateToProps=(state)=>{
    return{
      posts:state.posts,
      comments:state.comments
    };
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(actionCreators,dispatch);
}
const App=connect(mapStateToProps,mapDispatchToProps)(Main);
const Container=()=>{
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
