import React from 'react'
import './Footer.css'
import LogoFooter from '../../../assets/logo_footer.png'
import NavMenu from '../NavMenu/NavMenu'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <NavMenu />
                <img src={LogoFooter} alt="Logo" />
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
