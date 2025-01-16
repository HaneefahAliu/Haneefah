import React from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowUpRight } from 'lucide-react';

import Idea from '../../assets/images/idea.png';
import Icon from '../../assets/images/email-icon.svg';

import './style.css';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <hr />
                <div className='footerHeading'>
                    <h1>Got a great <span><img className='idea' src={Idea} alt="light bulb icon"/></span> idea?</h1>
                    <h2>Let's create a masterpiece!</h2> 
                    <p>Interested in discussing a project? I would love to hear about you and your project.  Feel free to reach out to me and I’ll get back to you.</p>
                    <a target="_blank" href='mailto:aliuhaneefah@gmail.com'>
                        <Send color='#218E2E' size={24} strokeWidth={1.5} /> Say Hi!  
                    </a>
                </div>

                <hr />

                <div className='footerCard'>
                    <div>
                        <p>designed & developed by <a className='me' target="_blank" href="https://www.haneefahaliu.com/">haneefah</a></p>
                    </div>
                    <div className='socialMediaLink'>
                        <a href="https://github.com/HaneefahAliu">github<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                        <a href="https://www.instagram.com/haneefah.design/">instagram<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                        <a href="https://medium.com/@haneefahaliu">medium<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                        <a href="https://www.linkedin.com/in/haneefah-aliu-6a8a21160/">linkedin<ArrowUpRight color='#ABACB9' size={20} strokeWidth={1.5} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;