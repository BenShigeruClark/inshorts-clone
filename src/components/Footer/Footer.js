import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">Inshorts Clone made by Ben Clark</span>
            <hr style={{width: "90%"}} />
            <div className="iconContainer">
                <a href="https://www.instagram.com/grain_vs_pixel/?hl=en" target="blank">
                    <i class="fab fa-instagram-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/benclarkwebdev/" target="blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.wideanglesounds.net/" target="blank">
                    <i class="fas fa-icons"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;