import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux'
import { getInitialData } from '../actions/shared'
import { setAuthUser } from '../actions/authUser';
import Login from './Login';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import NavBar from './NavBar';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(getInitialData());
    }
  
    logout = () => {
    	this.props.dispatch(setAuthUser(null)); 
        return <Redirect to='/' />
    }

    render() {
     const loggedIn=this.props.authUser !== null;
    
      return (
            <BrowserRouter>
                <div>
                    <h3 className="center header"> React App </h3>
                    <NavBar loggedInUser={this.props.authUser} />
                    <hr />
                    <div className="container center">
        		
                   {loggedIn ? <Route path='/' exact component={QuestionList} /> :
                        <Route path='/' exact>
                          <Login/>
                          </Route>
					}
					<Route path='/question/:id' component={QuestionDetail} />
					<Route path='/logout' render={() => {console.log('logged out'); return this.logout();}} />
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

function mapStateToProps(state) {
 const authUser = state.authUser?state.users[state.authUser] : null;
 return {
 	authUser
 }
}
export default connect(mapStateToProps)(App)
