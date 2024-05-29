import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { projects } from '../case-studies';

import './pages.css';

function CaseStudies() {
    return (
        <div className="content">
            <div className='project'>
                <h1>projects i’ve worked on</h1>
                <div className='container'>
                    {projects.map((project) => (
                        <div key={project.id}  className='projectCard'>
                            <Link to={`/case-studies/${project.route}`} className='projectLink'> 
                                <img className='projectImage' src={project.image} alt={project.title} />    
                                <div className='projectContent'>
                                    <h2 className='projectTitle'>{project.title}</h2>
                                    <p className='projectDesc'>{project.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;



