import React from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

const NavMenu = () => {
    return (
        <div className="nav-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="jsx-a11y/anchor-is-valid">Terms and Conditions</a></li>
                <li><a href="jsx-a11y/anchor-is-valid">Privacy Policy</a></li>
                <li><a href="jsx-a11y/anchor-is-valid">Collection Statement</a></li>
                <li><a href="jsx-a11y/anchor-is-valid">Help</a></li>
                <li><a href="jsx-a11y/anchor-is-valid">Manage Account</a></li>
            </ul>
        </div>
    )
}

export default NavMenu
