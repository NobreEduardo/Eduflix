import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from'../Button'

 
function Menu() { 
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Eduflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Bem Vindo
            </Button>
        </nav>
    );
 
} 
export default Menu; 