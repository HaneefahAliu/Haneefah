import React, { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import {  ref, listAll, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';

import { ScrollingImages } from '../components/imageScroller';
import { projects } from '../case-studies';

import './pages.css';
import Arrow from '../assets/images/arrow.png';

function CaseStudies() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const storageRef = ref(storage, 'scroll/'); // Update this path
                const result = await listAll(storageRef);
                
                const urlPromises = result.items.map(async (imageRef) => {
                    const url = await getDownloadURL(imageRef);
                    return {
                        src: url,
                        alt: imageRef.name
                    };
                });
                
                const imageUrls = await Promise.all(urlPromises);
                setImages(imageUrls);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className='content'>
            <div className='titleHeading'>
                <div class="selected">Selected</div>
                <div class="projects">Projects</div>
            </div>

            <div className='projectContainer'>
                {projects.map((project) => (
                    <div key={project.id} className='projectCard'>
                        {project.isExternal ? (
                            <a href={project.externalUrl} className='project' target="_blank" rel="noopener noreferrer">
                                <img className='projectImage' src={project.image} alt={project.title} />
                                <div className='projectContent'>
                                    <h2 className='projectTitle'>{project.title}</h2>
                                    <div className='projectTags'>
                                        {project.tags.split(',').map((tag) => (
                                            <span key={tag} className='projectTag'>{tag.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ) : (
                            <Link to={`/case-studies/${project.route}`} className='project'>
                                <img className='projectImage' src={project.image} alt={project.title} />
                                <div className='projectContent'>
                                    <h2 className='projectTitle'>{project.title}</h2>
                                    <div className='projectTags'>
                                        {project.tags.split(',').map((tag) => (
                                            <span key={tag} className='projectTag'>{tag.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div>
                <div className='title'>
                    <img src={Arrow} />
                    <p>your next project can also look like this</p>
                </div>
                <ScrollingImages images={images} />
            </div>
        </div>
    )
}

export default CaseStudies;
