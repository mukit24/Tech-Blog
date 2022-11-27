import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
    
  )
}

export default Header