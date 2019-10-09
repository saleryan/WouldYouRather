import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';

class Login extends Component {
    state = {
        user: null
    }

    setAuthUser = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthUser(this.state.user));
    }

    handleUser = (e) => {
        const val = e.target.value;
        this.setState({ user: val });
    }

    render() {
        const users = Object.keys(this.props.users).map(id => this.props.users[id]);

        return (<form onSubmit={this.setAuthUser}>
            <h2> Sign In </h2>
            <select className="select" onChange={this.handleUser}>
  				<option name="none" key="none" value=""></option>
                {users.length > 0 && users.map(user => <option name={user.id} key={user.id} value={user.id}> {user.name} </option>)}
            </select>
            <button className="btn" type="submit">Sign In </button>
        </form>)
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(Login);