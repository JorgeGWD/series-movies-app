import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import Button from '../Button/Button'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <Link to="/" >
                    <img src={Logo} alt="Logo" />
                </Link>
                <a href="jsx-a11y/anchor-is-valid"><p>Log In</p></a>
                <Button clasName={"btn-primary"} text="Strart your free trial" />
            </div>
        </header>
    )
}

export default Header
