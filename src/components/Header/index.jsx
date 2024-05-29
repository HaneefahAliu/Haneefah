import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo.png';

import './style.css';

const Header = () => {
    return (
    <div>
        <div className='header'>
            <div className='header-content'>
                <Link to="/">
                    <img src={Logo}  alt="Haneefah's Logo"/>
                </Link>
                <a className='button' target="_blank" href='https://drive.google.com/file/d/1QdNU4z8dendH1QuMwf2pSld0_fueWhFf/view?usp=sharing'>Resume</a>
            </div>
        </div>

        {/* <div className='border-bottom'></div> */}
    </div>
    )
}

export default Header;