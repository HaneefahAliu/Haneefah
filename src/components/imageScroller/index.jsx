import React from 'react';
import './style.css'

export const ScrollingImages = ({ images }) => {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="image-scroll-container">
            <div className="image-scroll-track">
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image.src} 
                        alt={image.alt || `Scroll item ${index + 1}`} 
                        className="scroll-image"
                    />
                ))}
                {images.map((image, index) => (
                    <img 
                        key={`duplicate-${index}`} 
                        src={image.src} 
                        alt={image.alt || `Scroll item ${index + 1}`} 
                        className="scroll-image"
                    />
                ))}
            </div>
        </div>
    );
};