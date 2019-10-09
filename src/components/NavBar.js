import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component  {
  render() {  
  return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/add' exact activeClassName='active'>New Question </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>Leader Board </NavLink>
                </li>
    {this.props.loggedIn &&
                <li>
                    <NavLink to='/logout' exact activeClassName='active'>Logout</NavLink>
                </li>}
            </ul>
        </nav>
    )
  }
}

  

 