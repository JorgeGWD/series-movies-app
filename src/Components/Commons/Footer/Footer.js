import React from 'react'
import './Footer.css'
import LogoFooter from '../../../assets/logo_footer.png'
import GooglePLay from '../../../assets/google-play.jpg'
import NavMenu from '../NavMenu/NavMenu'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="foter-left">
                    <NavMenu />
                    <img src={LogoFooter} alt="Logo" />
                    <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
                </div>
                <img src={GooglePLay} alt="google-play" />
            </div>
        </footer>
    )
}

export default Footer
