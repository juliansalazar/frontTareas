import React from 'react'
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>AUTOCAREST</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'><FaSignInAlt />Login</Link>
            </li>
            <li>
            <Link to='/register'><FaUser />Registrarse</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
