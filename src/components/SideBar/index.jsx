import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const SideBar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <Link to="/" className={`page-title ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>home</Link>
                </li>
                <li>
                    <Link to="/about" className={`page-title ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>about me</Link>
                </li>
                <li>
                    <Link to="/case-studies" className={`page-title ${activeTab === 'caseStudies' ? 'active' : ''}`} onClick={() => handleClick('caseStudies')}>case studies</Link>
                </li>
                <li>
                    <Link to="/projects" className={`page-title ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleClick('projects')}>other projects</Link>
                </li>
                <li>
                    <Link to="/contact" className={`page-title ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>contact me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar;

