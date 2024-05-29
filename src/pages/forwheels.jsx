import React from 'react';
import { Link } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import './pages.css';

function ForWheels() {
    return (
        <div className="case-study">
            <Link to="/case-studies" className='back-button'>
                <i className="zmdi zmdi-arrow-left"></i>
                <span>all case studies</span>
            </Link>

            <div className='pageContent'>
                <h1>See it. Learn it. Fix it: ForWheels revolutionizes automotive service using augmented reality.</h1>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/forwheels-cover.png"/>
                </IKContext>

                <div className='tags d-flex justify-content-between'>
                    <h6 className='tag'><span>Role:</span> Research | Protoyping | Visual Design | User Testing</h6>
                    <a className='tag' target="_blank" href='https://www.figma.com/proto/P60ss9t7cGtZ4m0bAEasVM/ForWheels?page-id=1%3A7&type=design&node-id=1464-871&viewport=561%2C-438%2C0.05&t=3OHL0QrD8YC8UJ7R-1&scaling=min-zoom&starting-point-node-id=1464%3A871&mode=design'>View Prototype <i className="zmdi zmdi-arrow-right"></i></a>
                </div>

                <h2>overview.</h2>
                <p className='pb-5'>In a rapidly evolving automotive industry, the need for innovative training and education solutions has become imperative. ForWheels is an augmented reality (AR) application designed to address this need by providing a comprehensive platform for Automotive training and education, design and engineering and car maintenance.</p>

                <div className='contentCard mb-5'>
                    <h2 className='py-3'>🎯 goal</h2>
                    <p>Revolutionise the automotive industry by implementing an augmented reality (AR) framework for comprehensive training, design, and vehicle maintenance.</p>
                </div>

                <div className='contentCard'>
                    <h2 className='py-3'>💡 solution</h2>
                    <p>Forwheels is an automotive learning application that enhances the learning experience of the users by introducting new concepts in a visually engaging manner. It helps grow users confidence in the things they’re already conversant with, and improves automobile maintenance practice using augmented reality technology. The project focuses on: automotive training and education, design and engineering, parts and components and car maintenance.</p>
                </div>
                <br />

                <h2 className='pt-5'>how it started...</h2>
                <p className='pb-3'>Cars are a huge part of our lives, societies and civilization at large. They make life easier, they’re symbols of status, and they inspire children to dream.</p>
                <p className='pb-3'>However, there are gaps in this relationship between man and machine. Many car owners have poor maintenance habits, many engineering students struggle to learn because they see more equations than actual cars while studying, and training technicians is expensive and hazardous, with risk of heavy artillery misuse leading to life-changing injuries and death sometimes.</p>
            
                <p className='pb-4'>Prior to starting the design of forwheels, we conducted an extensive market research study to gather information about the current state of automotive education and training at the time. The goal of the research was to identify current weaknesses, new market trends, and possible competitors in order to provide guidance for creating an efficient augmented reality application.</p>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/forwheels-marketresearch.png"/>
                </IKContext>
                <p className='py-3'>Once we established the needs of the business from the market research, we conducted user interviews with individuals who fit the product's purpose in order to understand their training requirements and pain points.</p>
                <p className='pb-3'>We had two objectives. The first was to gain a deeper understanding of preferred learning methods, and the second was to learn about prevalent habits pertaining to vehicle ownership and maintenance.</p>
            
                <h2 className='pt-5'>who are the users?</h2>
                <p className='pb-3'>The application targets automotive engineers, mechanic and maintenance professionals, car owners, learning specialists and engineering students looking for (complete sentence)</p>
                <p className='pb-3'>We spoke to these users and we were able to sort the information using the say-think-feel-do framework to compartmentalise the information and hone in on the emotion behind the users pain points.</p>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-empathymap.png"/>
                    </IKContext>
                </div>

                <h2 className='pt-5'>what did we find out?</h2>
                <p className='pb-3'>Following our interviews, we were able to identify and classify the significant takeaways and learnings from the people we spoke with</p>
                
                <div className='row'>
                    <div className='contentCard col-6 mb-5'>
                        <h3 className='color-orange'>The eyes have it</h3>
                        <p>Mirror neurons play a huge part in the human learning experience, especially in children. Mimicry is one of the earliest methods of learning we practice.</p>
                        <ul>
                            <li>“I learn by observing what others are doing e.g. mechanics”</li>
                            <li>“I enjoy the practical sessions more than the theoretic ones”</li>
                            <li>“I find it easier to learn by watching people than listening to explanations. I get sleepy when people explain to me.”</li>
                        </ul>
                    </div>
                    <div className='contentCard col-6 mb-5'>
                        <h3 className='color-orange'>Images over text</h3>
                        <p>The human brain processes images 60,000 times faster than text, and 90% of the information we recieve from the world around us is visual.</p>
                        <ul>
                            <li>“I learn better when I watch tutorials on youtube because it allows me to follow step-by-step”</li>
                            <li>“In my course, we always use technologies such as manufacturing machines so we can see the actual stuff to understand”</li>
                            <li>I love when lecturers demostrate whatever they are trying to explain, I usually don't forget afterwards."</li>
                        </ul>
                    </div>
                    <div className='contentCard col-6 mb-5'>
                        <h3 className='color-orange'>Cars need attention</h3>
                        <p>It is not enough to just own a car. You have to cater to your car attentively, to get the most out of your experience with it.</p>
                        <ul>
                            <li>“I always follow the appointment to maintain my car”</li>
                            <li>“Whenever i'm driving i'm always observant and I feel when something is wrong.”</li>
                            <li>“I know my car has problems and needs maintenance by looking at the lights on the dashboard”</li>
                        </ul>
                    </div>
                    <div className='contentCard col-6 mb-5'>
                        <h3 className='color-orange'>Confidence over time</h3>
                        <p>The more people do things and the more tasks people complete, the more self assured and increasingly confident they become.</p>
                        <ul>
                            <li>“Finishing things has helped me lose my fear of making mistakes”</li>
                            <li>“I didn’t have much self belief when I started out, but after a year I’m able to confidently diagnose the car, buy parts and take the engine apart if need be”</li>
                            <li>“These days, I only go to the mechanic if I try and can neither find nor fix the problem myself.”</li>
                        </ul>
                    </div>
                </div>

                <h2 className='pt-5'>defining our users</h2>
                <p className='pb-3'>Collating and sorting the data we gathered from our interviews, we also created these personas to best represent our target users.</p>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-persona1.png"/>
                    </IKContext>
                </div>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-persona2.png"/>
                    </IKContext>
                </div>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-persona3.png"/>
                    </IKContext>
                </div>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-persona4.png"/>
                    </IKContext>
                </div>

                <h2 className='pt-5'>why did we choose AR?</h2>
                <p className='pb-3'>With the goal of advanced and immersive learning, we had to choose a medium that best demonstrated not just the strengths of our solution, but one that also engaged and enhanced the experience for our target users.</p>
                <div className='pb-5'> 
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-ar.png"/>
                    </IKContext>
                </div>

                <h2 className='pb-3 pt-5'>High Level Architecture</h2>
                <div className='pb-5'> 
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-hla.png"/>
                    </IKContext>
                </div>

                <h2 className='pt-5'>Information Architecture</h2>
                <p>We organised the application's functions into four categories: learn mode, maintenance mode, freestyle mode, and challenge mode. We then developed a hierarchical navigation system to make it easier to explore these features.</p>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-forwheels-ia1.png"/>
                    </IKContext>
                </div>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-ia2.png"/>
                    </IKContext>
                </div>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-ia3.png"/>
                    </IKContext>
                </div>
                <div>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-ia4.ng"/>
                    </IKContext>
                </div>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-ia5.png"/>
                    </IKContext>
                </div>

                <h2 className='pt-5'>wireframing</h2>
                <p className='pb-3'>We created rough sketches to explore various design concepts on how to best solve this problem. By doing this, we were able to try out different variations, make changes, and refine the ideas swiftly.</p>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-sketch.png"/>
                    </IKContext>
                </div>
                

                <h2 className='py-5'>the design</h2>
                <h4>learn mode</h4>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-learn.png"/>
                    </IKContext>
                </div>

                <h4 className='py-5'>maintenance mode</h4>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheeels-maintenance.png"/>
                    </IKContext>
                </div>

                <h4 className='py-5'>practice mode</h4>
                <div className='pb-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheeels-practice.png"/>
                    </IKContext>
                </div>

                <h2 className='pt-5'>usability testing</h2>
                <p className='pb-5'>We recruited twelve participants aged 20-45 to test our augmented reality solution. This group included a mix of vehicle owners and students with varying levels of experience using technology. To assess usability, we assigned participants specific tasks to complete while using the AR solution. We encouraged them to think aloud throughout the process, verbalizing their thoughts and thought processes.  In addition to these observations, we conducted interviews and used the System Usability Scale (SUS) to gather further data and evaluate the overall user experience.</p>
                
                <h4>Users wanted subheadings or brief explanations added to titles of  menus.</h4>
                <p className='quote'>“A bit more context is needed with the titles. Maybe subheadings to let users know exactly what it is they’re getting into. The titles seem a bit vague, and I don't immediately know what each item means.  Maybe some videos, images, or icons around each of the titles will let users know what the individual sections mean, and what they’re about to commit to.”"</p>
                <div className='py-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-iteration1.png"/>
                    </IKContext>
                </div>
                
                <h4>Restructure Learn mode so it is easier to use</h4>
                <p className='quote'>“There was some initial confusion in learn mode because there were too many buttons and items screaming for attention at the same time. It would help if there was a more ordered or hierarchical method of operation to make life easier for future users.”</p>
                <div className='py-5'>
                    <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                        <IKImage path="/forwheels-iteration2.png"/>
                    </IKContext>
                </div>

                <h2 className='pt-5'>reflections</h2>
                <p>Developing ForWheels was a collaborative and enriching experience. Working alongside a talented team of four other individuals, we tried tackled the challenge of revolutionizing automotive training and education. </p>
                <p>While the project was majorly a success, we noted some limitations:</p>
                <ul>
                    <li>We haven’t been able to integrate collaborative AR where people can work together over long distances.</li>
                    <li>The application is heavily dependent on internet connection.</li>
                    <li>Hololens2 has poor battery life.</li>
                    <li>Hololens 2 tends to overgeat with extensive usage over time.</li>
                </ul>
                <p className='pb-2'>As we move forward, we  envision several potential areas of improvement like connecting to local garages for assitance, vehicle repair diagnostics, or premium services like car part deliveries </p>
                
                <div className='py-5'>
                    <p>view prototype <a className='viewlink' target="_blank" href='https://www.figma.com/proto/P60ss9t7cGtZ4m0bAEasVM/ForWheels?page-id=1%3A7&type=design&node-id=1464-871&viewport=561%2C-438%2C0.05&t=3OHL0QrD8YC8UJ7R-1&scaling=min-zoom&starting-point-node-id=1464%3A871&mode=design'>here</a></p>
                    <p>view video showcase  <a className='viewlink' target="_blank" href='https://drive.google.com/drive/folders/1ojtUroZlUpF6TlIAkqoFq7_rvjGSicpi?usp=drive_link'>here</a></p>
                </div>
            </div>

            <div className='pb-5'>
                <Link to="/case-studies" className='back-button'>
                    <i className="zmdi zmdi-arrow-left"></i>
                    <span>all case studies</span>
                </Link>
            </div>
        </div>
    )
}

export default ForWheels;