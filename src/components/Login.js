import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';
import { withRouter } from 'react-router-dom';

function Login({ users, location, dispatch, history }) {

    const [user, setUser] = useState(null);
    
    const setAuthenticatedUser = (e) => {
        e.preventDefault();
        dispatch(setAuthUser(user));
        const { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
    }

    const handleUser = (e) => {
        const val = e.target.value;
        setUser(val);
    }

    const mappedUsers = Object.keys(users).map(id => users[id]);

    return (<form onSubmit={setAuthenticatedUser}>
        <h2> Sign In </h2>
        <select className="select" onChange={handleUser}>
            <option name="none" key="none" value=""></option>

            {mappedUsers.length > 0 && mappedUsers.map(user =>
                <option name={user.id}
                    key={user.id}
                    value={user.id}>
                    {user.name} </option>)}
        </select>
        <button className="btn" type="submit">Sign In </button>
    </form>)


}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
export default withRouter(connect(mapStateToProps)(Login));