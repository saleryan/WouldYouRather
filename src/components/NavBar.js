import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
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
                <li>
                    <NavLink to='/logout' exact activeClassName='active'>Logout</NavLink>
                </li>
            </ul>
        </nav>
    )

}