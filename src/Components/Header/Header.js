import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Header = (props) => {
    
    return (
        <div className="container header">
           <a><img src={props.image} alt=""/></a>
           <strong><h1 class="title">Mitra Online Academy</h1></strong>
        </div>
    );
};

export default Header;