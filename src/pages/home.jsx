import React from 'react';
import './pages.css';

import { ArrowUpRight } from 'lucide-react';
import Haneefah from '../assets/images/Haneefah.png'
import Icon from '../assets/images/arrow-right.svg'

function Home() {

    return (
        <div className='content'>
            <div className='heroContainer'>
                <h1>PRODUCT DESIGNER <span className='smallText'>+ many more</span></h1>
                <div className='nameIntroduction'>
                    <p>Hi! I’m Haneefah</p>
                    <img src={Haneefah}  alt="Haneefah"/>
                </div>
                <p>a product designer solving problems and bridging <br></br> innovation and usability through creative, thoughtful <br></br>and functional digital products and experience.</p>
            </div>

            <div className='heroFooter'>
            <div className='socialMediaLink'>
                        <a href="https://github.com/HaneefahAliu">github<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                        <a href="https://www.instagram.com/haneefah.design/">instagram<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                        <a href="https://medium.com/@haneefahaliu">medium<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                        <a href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/">linkedin<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                    </div>

                <a className='emailBtn' target="_blank" href='mailto:aliuhaneefah@gmail.com'>
                    <span className='default-text'>Say Hi👋</span>
                    <span className='hover-text'>aliuhaneefah@gmail.com</span>
                </a>
            </div>
        </div>
    )
}

export default Home;
