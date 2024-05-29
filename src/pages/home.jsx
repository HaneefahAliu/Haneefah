import React from 'react';

import './pages.css';

import Haneefah from '../assets/images/Haneefah.png';

function Home() {
    return (
        <div className="content home">
            <img src={Haneefah} alt="" />
            <h1>PRODUCT DESIGNER + SOFTWARE DEVELOPER.</h1>
            <p>Hi! I’m Haneefah, a product designer and software developer based in the united kingdom solving problems and improving lives through creative, thoughtful and functional digital products and experiences.</p>
        </div>
    )
}

export default Home;