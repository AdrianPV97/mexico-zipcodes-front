import React from 'react';
import './header.css';

function Header(){
    return(
        <header>
            <div className="header-container"></div>
            <div className="header-container" id='title-block-header'>
                <span id="me">Mé</span> <span id="xi">xi</span> <span id="co">co</span> 
                ZipCodes
                </div>
            <div className="header-container" id='social-block-header'>
                <a href='http://google.com' className="social-space"></a>
                <a href='http://google.com' className="social-space"></a>
                <a href='http://google.com' className="social-space"></a>
                <a href='http://google.com' className="social-space"></a>
                <a href='http://google.com' className="social-space"></a>
            </div>            
        </header>
    )
}


export default Header