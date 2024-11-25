import React from 'react';
import logo from '../../assets/logo.senac.svg';
import { Link } from 'react-router-dom';

function Header2() {

    return (
        <nav className="navbar navbar-expand-lg bg-very-light-blue">
            <div className="container justify-content-center">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="100" />
                </Link>
            </div>
        </nav>
    );
}

export default Header2;
