import React from 'react'
import Logo from '../../../assets/logo.png'
import Button from '../Button/Button'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <img src={Logo} alt="Logo" />
                <p>Log In</p>
                <Button clasName={"btn-primary"} text="Strart your free trial" />
            </div>
        </header>
    )
}

export default Header
