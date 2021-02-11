import React from "react";

import Logo from "../../../images/logoMarlonGarcia_02.png";

import './header.css';

function Header() {
return (
<div className="container-fluid mt-3 border">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img className="logo" src={Logo}></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Opción1</a>
                    <a className="nav-link" href="#">Opción2</a>
                </div>
            </div>
        </div>
    </nav>
</div>
);
}

export default Header;