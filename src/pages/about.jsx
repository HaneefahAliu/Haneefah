import React from 'react';
import './pages.css';

import aboutImg from '../assets/images/Haneefah-about.png';
import about from '../assets/images/about.png';
import speaker from '../assets/images/speaker.png';
import doings from '../assets/images/doings.png';

function About() {
    return (
        <div className="content">
            <div className='about'>
                <div className='introduction pb-5'>
                    <p> Who is Haneefah?</p>
                    <h1>I listen to problems and sketch out solutions.</h1>
                </div>

                <div className="row">
                    <div className='col-md-6'>
                    <h2>Haneefah <span className='nameSound'>/Ha-knee-farh/ <a href="https://embed.howtopronounce.com/classic/en/haneefah/30659170" target='_blank'><img src={speaker} /></a></span></h2>
                        <img className='aboutImg' src={aboutImg}  alt="Haneefah" />
                    </div>

                    <div className='col-md-5'>
                        <h2>hi :)</h2>
                        <p>I am a product designer with <span>3+ years</span> of experience passionate about solving problems and improving lives through design and development. I enjoy <span>building products that solve problems</span> and make live better. I'm on a mission to make the digital world a little more fulfilling by merging tools and processes to produce simple, and <span>delightful user-centered digital experience</span> that works for the end user and meets the objective of the business.</p>
                        <p>Picture this: A girl with a Bachelor's in Computer Information Systems who decided to take a detour into the colourful world of user experience. Plot twist: I loved it so much, I snagged a Master's in User Experience Design! Now, I'm that rare unicorn fluent in both code and design, <span>bridging the gap between technical possibilities and user needs.</span></p>
                        <p>My work is largely motivated by users and their narratives which is why I focus on designing significant solutions that can complement their lives. I'm always eager to learn and apply new technologies and methodologies to enhance user experiences and I thrive in collaborative environments and enjoy tackling complex design challenges.</p>
                        <p>If you're looking for a product designer who can bridge the gap between tech and people, who believes in data-driven decisions but isn't afraid to trust their gut then we should definitely chat. Feel free to drop me a message <a href="mailto:aliuhaneefah@gmail.com">aliuhaneefah@gmail.com</a>.</p>
                    </div>
                </div>

                <div className='doings'>
                    <h3 className='pb-5'>I'm dedicated to crafting thoughtful details, refined aesthetics, and seamless interactions. My goal is to create designs that elevate everyday experiences – simple yet impactful, intuitive to use, and leaving a lasting impression.</h3>
                    <p className='pt-5'>how do I perform my magic?</p>
                    <img src={doings} />
                </div>

                <div className='fun'>
                    <h2>When I’m not stuck on my desk?</h2>
                    <p>you might find me pumping iron at the gym or losing track of time while piecing together  LEGO sets or bringing colouring books to life, I also love a good book or just listening to the best artistes across the world. These keep my creativity flowing and fuels my thinking. Plus, they're great conversation starters!</p>
                    <img src={about} alt="Things Haneefah does" />
                </div>
            </div>
        </div>
    )
}

export default About;