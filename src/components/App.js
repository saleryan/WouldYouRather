import React, { Component } from 'react';
import '../index.css';
import {connect} from 'react-redux' 
import {getInitialData} from '../actions/shared'
import Login from './Login';
import {Route, BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar';
class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }
  
  render() {
    return (
   	  <BrowserRouter>
      <div>
      <h3 className="center header"> React App </h3>
      <NavBar/>
      <hr />
      <div className="container center">
       	<Route path='/' exact component={Login}/>
      </div>
	  </div>
	</BrowserRouter>
	
    );
  }
}


export default connect()(App)
