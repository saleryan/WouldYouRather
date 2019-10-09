import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux' 
import {getInitialData} from '../actions/shared'
class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">        
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default connect()(App)
