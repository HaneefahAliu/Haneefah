import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './pages.css';

function Projects() {
    return (
        <div className="content">
            <div className='others'>
                <h1>things i’ve built</h1>
                <div className='pageContent'>
                    <h4>Lateefah's Portfolio</h4>
                    <p>A personal website for Lateefah to display all her works.</p>
                    <a className='viewlink' target="_blank" href="https://www.lateefahaliu.com/">View Live Project</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;



