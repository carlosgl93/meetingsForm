import React from 'react'
import "../Css/Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="left__column">
                <h3 className="footer__title">PixelCode</h3>
                <small>Diseño, publicidad y desarrollo de soluciones tecnológicas</small>
            </div>
            <div className="right__column">
                <h3 className="footer__title">Contacto</h3>
                <small>contacto@pixelcode.cl</small>
                <small>+56 9 63731627</small>
                <small>+56 9 42795499</small>
            </div>
            
        </footer>
    )
}

export default Footer
