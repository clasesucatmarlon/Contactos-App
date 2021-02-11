import React from 'react';

import Logo from '../../../images/logoMarlonGarcia_02.png';

import './footer.css';

const Footer = () => {
    return (
        <div className="mb-4">
            <div className="container-fluid p-3 d-flex flex-column justify-content-center footer bg-light border">
                <div>
                    <img className="logoFooter" src={Logo} alt="Logo"/>
                </div>
                <div>
                    <p>Marlon García - Medellín, 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
