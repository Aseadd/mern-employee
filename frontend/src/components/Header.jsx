import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div classname= 'logo'>
            <Link to='/'>Employee Managment</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'><FaSignInAlt/>Login</Link>
            </li>
            <li>
                <Link to='/register'><FaUserAlt/>Register</Link>
            </li>
            <li>
                <Link to='/dashboard'><FaSignOutAlt/>Logout</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

        </ul>

    </header>
  )
}

export default Header