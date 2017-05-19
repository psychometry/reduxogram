import React, {Component} from 'react';
import{BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './main.css';

import PhotoGrid from './photoGrid';
import Single from './single';

class Main extends Component{
  render(){
    return(
        <Router>
          <div className='container'>
            <div className='hero'>
            <h1>
              <Link to='/'>Reduxogram</Link>
            </h1>
            </div>
            <Switch>
              <Route exact path="/" render={()=>{return <PhotoGrid {...this.props}/>}}/>
              <Route path="/view/:postId" component={({match})=>{return <Single {...this.props} postId={match.params.postId}/>}}/>
            </Switch>
          </div>
        </Router>
    );
  }
};
export default Main;
