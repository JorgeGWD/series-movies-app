import React from 'react'
import Logo from '../../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <img src={Logo} alt="Logo" />
                <p>Log In</p>
            </div>
        </header>
    )
}

export default Header
