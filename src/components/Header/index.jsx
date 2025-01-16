import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowDownToLine } from 'lucide-react';


import Logo from '../../assets/images/Logo.png';

import './style.css';

const Header = () => {
    const location = useLocation();

    return (
    <div>
        <div className='header'>
            <div className='header-content'>
                <Link to="/">
                    <img src={Logo}  alt="Haneefah's Logo"/>
                </Link>

                <div className='pagesTab'>
                    <Link to="/about">
                        <span className={`tab ${location.pathname === '/about' ? 'active' : ''}`}>
                            about
                        </span>
                    </Link>
                    <Link to="/case-studies">
                        <span className={`tab ${location.pathname === '/case-studies' ? 'active' : ''}`}>
                            projects
                        </span>
                    </Link>
                </div>

                <a className='downloadButton' target="_blank" href='https://drive.google.com/file/d/1QdNU4z8dendH1QuMwf2pSld0_fueWhFf/view?usp=sharing'>
                <ArrowDownToLine color='#218E2E' size={24} strokeWidth={1.5} /> Resume  
                </a>
            </div>
        </div>
    </div>
    )
}

export default Header;