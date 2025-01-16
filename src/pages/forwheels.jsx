import React, { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import { ref, getDownloadURL } from 'firebase/storage';
import './pages.css';


function ForWheels() {
    const [images, setImages] = useState({
        cover: '',
        research: '',
        empathy: '',
        persona1: '',
        persona2: '',
        persona3: '',
        persona4: '',
        ar: '',
        sketches: '',
        learn: '',
        maintenance: '',
        practice: '',
        iteration1: '',
        iteration2: '',
    });

    const [videos, setVideos] = useState({
        learn: '',
        live: '',
        practice: '',
    }); 

    useEffect(() => {
        // Function to get URL for a single image
        const loadImage = async (imagePath) => {
            const imageRef = ref(storage, `forwheels/${imagePath}`);
            return await getDownloadURL(imageRef);
        };

        const loadVideo = async (videoPath) => {
            try {
                const videoRef = ref(storage, `forwheels/${videoPath}`);
                const url = await getDownloadURL(videoRef);
                return url;
            } catch (error) {
                console.error(`Error loading ${videoPath}:`, error);
                return '';
            }
        };

        // Load all images
        const loadAllImages = async () => {
            try {
                const urls = {
                    cover: await loadImage('forwheeels.png'),
                    research: await loadImage('marketresearch.png'),
                    empathy: await loadImage('forwheels-empathymap.png'),
                    persona1: await loadImage('forwheels-persona1.png'),
                    persona2: await loadImage('forwheels-persona2.png'),
                    persona3: await loadImage('forwheels-persona3.png'),
                    persona4: await loadImage('forwheels-persona4.png'),
                    ar: await loadImage('forwheels-ar.png'),
                    hla: await loadImage('forwheels-hla.png'),
                    ia1: await loadImage('forwheels-ia1.png'),
                    ia2: await loadImage('forwheels-ia2.png'),
                    ia3: await loadImage('forwheels-ia3.png'),
                    ia4: await loadImage('forwheels-ia4.png'),
                    ia5: await loadImage('forwheels-ia5.png'),
                    sketch: await loadImage('forwheels-sketch.png'),
                    learn: await loadImage('forwheels-learn.png'),
                    maintenance: await loadImage('forwheels-sketch.png'),
                    practice: await loadImage('forwheels-sketch.png'),
                    iteration1: await loadImage('forwheels-iteration1.png'),
                    iteration2: await loadImage('forwheels-iteration2.png'),
                };
                setImages(urls);
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        const loadAllVideos = async () => {
            try {
                const urls = {
                    learn: await loadVideo('learn.mp4'), 
                    live: await loadVideo('live.mp4'), 
                    practice: await loadVideo('practice.mp4'), 
                };
            setVideos(urls);
            } catch (error) {
                console.error("Error loading videos:", error);
            }
        };

        loadAllImages();
        loadAllVideos(); 
    }, []);

    return (
        <div className="case-study">
            <div className='pageContent'>
                <h5>ForWheels</h5>
                <h1>Revolutionizing Automotive Services using Augmented Reality.</h1>
                <img className='pt-3 pb-5' src={images.cover} alt="" />

                <div className='d-flex justify-content-between pb-5'>
                    <div className="summary">
                        <h6>Summary:</h6>
                        <p className='pb-5'>ForWheels is a cutting-edge augmented reality system that transforms conventional classroom settings into dynamic, three-dimensional experiences. To produce meaningful instructional encounters, the project combines extensive user research, intuitive interface design, and cutting-edge AR visualisation technology.</p>

                        <h6>Prototype:</h6>
                        <a target="_blank" href='https://www.figma.com/proto/P60ss9t7cGtZ4m0bAEasVM/ForWheels?page-id=1%3A7&type=design&node-id=1464-871&viewport=561%2C-438%2C0.05&t=3OHL0QrD8YC8UJ7R-1&scaling=min-zoom&starting-point-node-id=1464%3A871&mode=design'>View here</a>
                    </div>
                    <div className="">
                        <h6>Responsibilities:</h6>
                        <p className='pb-5'>UX Research, UX Design, UI Design, Prototyping.</p>

                        <h6>Delivearables:</h6>
                        <p>High Fidelity Designs, Interactive Prototype, Design Assets.</p>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-3">
                        <h2>overview</h2>
                    </div>
                    <div className="col-md-9">
                        <p className='pb-5'>In a rapidly evolving automotive industry, the need for innovative training and education solutions has become imperative. ForWheels is an augmented reality (AR) application designed to address this need by providing a comprehensive platform for Automotive training and education, design and engineering and car maintenance.</p>
                    </div>
                </div>

                <div className='contentCard mb-5'>
                    <h2 className='py-3'>🎯 goal</h2>
                    <p>Revolutionise the automotive industry by implementing an augmented reality (AR) framework for comprehensive training, design, and vehicle maintenance.</p>
                </div>

                <div className="row pt-3 pb-5">
                    <div className="col-md-3">
                        <h2>how it started...</h2>
                    </div>
                    <div className="col-md-9">
                        <p className='pb-3'>Cars are a huge part of our lives, societies and civilization at large. They make life easier, they’re symbols of status, and they inspire children to dream.</p>
                        <p className='pb-3'>However, there are gaps in this relationship between man and machine. Many car owners have poor maintenance habits, many engineering students struggle to learn because they see more equations than actual cars while studying, and training technicians is expensive and hazardous, with risk of heavy artillery misuse leading to life-changing injuries and death sometimes.</p>
                    </div>
                </div>

                <p className='pb-4'>Prior to starting the design of forwheels, we conducted an extensive market research study to gather information about the current state of automotive education and training at the time. The goal of the research was to identify current weaknesses, new market trends, and possible competitors in order to provide guidance for creating an efficient augmented reality application.</p>
                <img className='pb-5' src={images.research} alt="" />

                <p className='py-3'>Once we established the needs of the business from the market research, we conducted user interviews with individuals who fit the product's purpose in order to understand their training requirements and pain points.</p>
                <p className='pb-3'>We had two objectives. The first was to gain a deeper understanding of preferred learning methods, and the second was to learn about prevalent habits pertaining to vehicle ownership and maintenance.</p>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>who are the users?</h2>
                    </div>
                    <div className="col-md-9">
                        <p className='pb-3'>The application targets automotive engineers, mechanic and maintenance professionals, car owners, learning specialists and engineering students looking for (complete sentence)</p>
                        <p>We spoke to these users and we were able to sort the information using the say-think-feel-do framework to compartmentalise the information and hone in on the emotion behind the users pain points.</p>
                    </div>
                </div>

                <div className='pb-3'>
                    <img src={images.empathy} alt="" />
                </div>

                <p className='pb-3'>Following our interviews, we were able to identify and classify the significant takeaways and learnings from the people we spoke with.</p>

                <div className='row pb-5'>
                    <div className='col-6 mb-5'>
                        <h3><span>01.</span> The eyes have it</h3>
                        <p>Mirror neurons play a huge part in the human learning experience, especially in children. Mimicry is one of the earliest methods of learning we practice.</p>
                        <ul>
                            <li>“I learn by observing what others are doing e.g. mechanics”</li>
                            <li>“I enjoy the practical sessions more than the theoretic ones”</li>
                            <li>“I find it easier to learn by watching people than listening to explanations. I get sleepy when people explain to me.”</li>
                        </ul>
                    </div>
                    <div className='col-6 mb-5'>
                        <h3><span>02.</span> Images over text</h3>
                        <p>The human brain processes images 60,000 times faster than text, and 90% of the information we recieve from the world around us is visual.</p>
                        <ul>
                            <li>“I learn better when I watch tutorials on youtube because it allows me to follow step-by-step”</li>
                            <li>“In my course, we always use technologies such as manufacturing machines so we can see the actual stuff to understand”</li>
                            <li>I love when lecturers demostrate whatever they are trying to explain, I usually don't forget afterwards."</li>
                        </ul>
                    </div>
                    <div className='col-6 mb-5'>
                        <h3><span>03.</span> Cars need attention</h3>
                        <p>It is not enough to just own a car. You have to cater to your car attentively, to get the most out of your experience with it.</p>
                        <ul>
                            <li>“I always follow the appointment to maintain my car”</li>
                            <li>“Whenever i'm driving i'm always observant and I feel when something is wrong.”</li>
                            <li>“I know my car has problems and needs maintenance by looking at the lights on the dashboard”</li>
                        </ul>
                    </div>
                    <div className='col-6 mb-5'>
                        <h3><span>04.</span> Confidence over time</h3>
                        <p>The more people do things and the more tasks people complete, the more self assured and increasingly confident they become.</p>
                        <ul>
                            <li>“Finishing things has helped me lose my fear of making mistakes”</li>
                            <li>“I didn’t have much self belief when I started out, but after a year I’m able to confidently diagnose the car, buy parts and take the engine apart if need be”</li>
                            <li>“These days, I only go to the mechanic if I try and can neither find nor fix the problem myself.”</li>
                        </ul>
                    </div>
                </div>

                <div className='contentCard mb-5'>
                    <h2 className='py-3'>💡 solution</h2>
                    <p>Forwheels is an automotive learning application that enhances the learning experience of the users by introducting new concepts in a visually engaging manner. It helps grow users confidence in the things they’re already conversant with, and improves automobile maintenance practice using augmented reality technology. The project focuses on: automotive training and education, design and engineering, parts and components and car maintenance.</p>
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>defining our users</h2>
                    </div>
                    <div className="col-md-9">
                        <p>Collating and sorting the data we gathered from our interviews, we also created these personas to best represent our target users.</p>
                    </div>
                </div>
                
                <div className='personas'>
                    <img className='pb-5' src={images.persona1} alt="" />
                    <img className='pb-5' src={images.persona2} alt="" />
                    <img className='pb-5' src={images.persona3} alt="" />
                    <img className='pb-5' src={images.persona4} alt="" />
                </div> 

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>why did we choose AR?</h2>
                    </div>
                    <div className="col-md-9">
                        <p className='pb-3'>We thought there was enough information about vehicles, but the presentation and delivery were obviously the biggest issue. Our goal was to design an enjoyable, user-friendly, and engaging experience. To do this, we needed to design an experience that was both extensive enough to cover essential issues with as many resources as possible, easy enough for the average car owner to utilise without too much difficulty, and engaging enough to keep students enthusiastic while they were learning. We had to choose an approach that not only best showcased our solution's capabilities but also engaged and improved the experience for our target users in order to achieve the goal of advanced and immersive learning.</p>
                    </div>
                </div>
                <div className='pb-5'> 
                    <img className='pb-5' src={images.ar} alt="" />
                </div>

                <h2 className='pb-3 pt-5'>high level architecture</h2>
                <div className='pb-5'> 
                    <img className='pb-5' src={images.hla} alt="" />
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>information architecture</h2>
                    </div>
                    <div className="col-md-9">
                        <p>We organised the application's functions into four categories: learn mode, maintenance mode, freestyle mode, and challenge mode. We then developed a hierarchical navigation system to make it easier to explore these features.</p>
                    </div>
                </div>

                <div> 
                    <img className='pb-5' src={images.ia1} alt="" />
                    <img className='pb-5' src={images.ia2} alt="" />
                    <img className='pb-5' src={images.ia3} alt="" />
                    <img className='pb-5' src={images.ia4} alt="" />
                    <img className='pb-5' src={images.ia5} alt="" />
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>explorations and sketches</h2>
                    </div>
                    <div className="col-md-9">
                        <p>We created rough sketches to explore various design concepts on how to best solve this problem. By doing this, we were able to try out different variations, make changes, and refine the ideas swiftly.</p>
                    </div>
                </div>

                <div className='pb-5'> 
                    <img className='pb-5' src={images.sketch} alt="" />
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>the design</h2>
                    </div>
                    <div className="col-md-9">
                        <p>Over a focused 12-week development period, our team successfully designed and delivered the ForWheels application, carefully crafting every element to enhance the user experience. By adhering to our core principles, we created a solution that transforms the way users interact with our platform. The project's success stems from our unwavering commitment to our strategic vision</p>
                    </div>
                </div>

                <h4>learn mode</h4>
                <div className='pb-5'>
                    <img className='pb-5' src={images.learn} alt="" />
                </div>

                <h4 className='py-5'>maintenance mode</h4>
                <div className='pb-5'>
                    <img className='pb-5' src={images.maintenance} alt="" />
                </div>

                <h4 className='py-5'>practice mode</h4>
                <div className='pb-5'>
                    <img className='pb-5' src={images.practice} alt="" />
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>usability testing</h2>
                    </div>
                    <div className="col-md-9">
                    <p>We recruited twelve participants aged 20-45 to test our augmented reality solution. This group included a mix of vehicle owners and students with varying levels of experience using technology. To assess usability, we assigned participants specific tasks to complete while using the AR solution. We encouraged them to think aloud throughout the process, verbalizing their thoughts and thought processes.  In addition to these observations, we conducted interviews and used the System Usability Scale (SUS) to gather further data and evaluate the overall user experience.</p>
                    </div>
                </div>

                <h4>Users wanted subheadings or brief explanations added to titles of  menus.</h4>
                <p className='quote'>“A bit more context is needed with the titles. Maybe subheadings to let users know exactly what it is they’re getting into. The titles seem a bit vague, and I don't immediately know what each item means.  Maybe some videos, images, or icons around each of the titles will let users know what the individual sections mean, and what they’re about to commit to.”"</p>
                <div className='pb-5'>
                    <img src={images.iteration1} alt="" />
                </div>

                <h4 className='pt-5'>Restructure Learn mode so it is easier to use</h4>
                <p className='quote'>“There was some initial confusion in learn mode because there were too many buttons and items screaming for attention at the same time. It would help if there was a more ordered or hierarchical method of operation to make life easier for future users.”</p>
                <div className='pb-5'>
                    <img src={images.iteration2} alt="" />
                </div>

                <div>
                    <h2>video showcase</h2>
                    <div className='videos'>
                        {videos.learn && (
                            <video src={videos.learn} controls />
                        )}

                        {videos.live && ( 
                            <video src={videos.live} controls />
                        )}

                        {videos.practice && ( 
                            <video src={videos.practice} controls />
                        )}
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>reflections</h2>
                    </div>
                    <div className="col-md-9">
                        <p>Developing ForWheels was a collaborative and enriching experience. Working alongside a talented team of four other individuals, we tried tackled the challenge of revolutionizing automotive training and education. </p>
                        <p>While the project was majorly a success, we noted some limitations:</p>
                        <ul>
                            <li>We haven’t been able to integrate collaborative AR where people can work together over long distances.</li>
                            <li>The application is heavily dependent on internet connection.</li>
                            <li>Hololens2 has poor battery life.</li>
                            <li>Hololens 2 tends to overgeat with extensive usage over time.</li>
                        </ul>
                        <p className='pb-2'>As we move forward, we  envision several potential areas of improvement like connecting to local garages for assitance, vehicle repair diagnostics, or premium services like car part deliveries. </p>   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForWheels;