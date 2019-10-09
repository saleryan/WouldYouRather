import React, {Component} from 'react';
import {connect} from 'react-redux'

class Login extends Component {
 setAuthUser() {
   
 }
 render() {
  const users = Object.keys(this.props.users).map(id=>this.props.users[id]);
  
   return (<form onSubmit={this.setAuthUser}>
          <h2> Sign In </h2>
          <select className="select">
{users.length>0 && users.map(user => <option name={user.name} key={user.id}> {user.name} </option>)}
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