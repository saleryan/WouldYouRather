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
import NewQuestion from './NewQuestion';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(getInitialData());
    }
  
    logout = () => {
    	this.props.dispatch(setAuthUser(null)); 
        return <Redirect to='/' />
    }

    render() {
     const {isLoggedIn, authUser} = this.props;
    
      return (
            <BrowserRouter>
                <div>
                    <h3 className="center header"> React App </h3>
                    <NavBar loggedInUser={authUser} />
                    <hr />
                    <div className="container center">
                   
                    <Route path='/' exact render={()=>isLoggedIn?<QuestionList/>:<Redirect to='/login'/>} /> 
					<Route path='/question/:id' render={(props)=>isLoggedIn?<QuestionDetail {...props}/>:<Redirect to='/login'/>} /> 
					<Route path='/logout' render={() => {return this.logout();}} />
 					<Route path='/login' render={()=>isLoggedIn?<Redirect to="/"/>:<Login/>} />
 					<Route path='/add' render={(props)=>isLoggedIn? <NewQuestion {...props}/>:<Redirect to='/login'/>} /> 
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

function mapStateToProps(state) {
 const authUser = state.authUser?state.users[state.authUser] : null;
 return {
   	authUser,
 	isLoggedIn: !!authUser
 }
}
export default connect(mapStateToProps)(App)
