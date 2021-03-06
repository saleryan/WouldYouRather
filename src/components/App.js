import React, { useEffect } from 'react';
import '../index.css';
import { getInitialData } from '../actions/shared'
import { setAuthUser } from '../actions/authUser';
import Login from './Login';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';
import {useSelector, useDispatch} from 'react-redux';

function App() {
    
    const authUser = useSelector(state => state.authUser ? state.users[state.authUser] : null);
    const isLoggedIn = !!authUser;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInitialData());
        return () => {

        }
    }, [dispatch]);

    /* https://tylermcginnis.com/react-router-protected-routes-authentication */
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={({ location, ...props }) => (
            isLoggedIn
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }} />
        )} />
    )

    const logout = () => {
        dispatch(setAuthUser(null));
        return <Redirect to='/' />
    }

    return (
        <BrowserRouter>
            <div>
                <h3 className="center header"> React App </h3>
                <NavBar loggedInUser={authUser} />
                <hr />
                <div className="container center">
                    <Switch>
                        <PrivateRoute exact path="/" component={QuestionList} />
                        <PrivateRoute path="/question/:id" component={QuestionDetail} />
                        <Route path='/logout' render={() => { return logout(); }} />
                        <Route path='/login' render={() => isLoggedIn ? <Redirect to="/" /> : <Login />} />
                        <PrivateRoute path="/add" component={NewQuestion} />
                        <PrivateRoute path="/leaderboard" component={Leaderboard} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>

    )

}

export default App;
