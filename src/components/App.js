import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux'
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

class App extends Component {

    componentDidMount() {
        this.props.dispatch(getInitialData());
    }

    /* https://tylermcginnis.com/react-router-protected-routes-authentication */
    PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={({ location, ...props }) => (
            this.props.isLoggedIn
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }} />
        )} />
    )

    logout = () => {
        this.props.dispatch(setAuthUser(null));
        return <Redirect to='/' />
    }

    render() {
        const { isLoggedIn, authUser } = this.props;
        const { PrivateRoute } = this;

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
                            <Route path='/logout' render={() => { return this.logout(); }} />
                            <Route path='/login' render={() => isLoggedIn ? <Redirect to="/" /> : <Login />} />
                            <PrivateRoute path="/add" component={NewQuestion} />
                            <PrivateRoute path="/leaderboard" component={Leaderboard} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

function mapStateToProps(state) {
    const authUser = state.authUser ? state.users[state.authUser] : null;
    return {
        authUser,
        isLoggedIn: !!authUser
    }
}
export default connect(mapStateToProps)(App)
