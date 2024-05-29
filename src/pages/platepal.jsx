import React from 'react';
import { Link } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import './pages.css';

function PlatePal() {
    return (
        <div className="case-study">
        <Link to="/case-studies" className='back-button'>
            <i className="zmdi zmdi-arrow-left"></i>
            <span>all case studies</span>
        </Link>

        <div className='pageContent'>
            <h1>PlatePal: Improving Inclusiveness and Transforming Stressful meal preparations into Relaxing Culinary Experiences  </h1>
            <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                <IKImage path="/platepal.png"/>
            </IKContext>

            <div className='tags d-flex justify-content-between'>
                <h6 className='tag'><span>Role:</span> Research | Accessibility | Visual Design | Prototyping | User Testing </h6>
                <a className='tag' target="_blank" href='https://www.figma.com/proto/g9PBS5J3eLh3koeTtyJby9/platepal?page-id=521%3A1202&node-id=526-4532&viewport=323%2C532%2C0.1&t=rKiyCAj19kmAVvvo-1&scaling=scale-down&starting-point-node-id=521%3A1203'>View Prototype <i className="zmdi zmdi-arrow-right"></i></a>
            </div>

            <h2>overview.</h2>
            <p className='pb-5'>PlatePal is a meal planning and recipe application that helps to improve the cooking experience and make meal preparation simpler and less frustrating. PlatePal is designed to create a possible solution to the issues faced by individuals when trying to plan meals and search for recipes online.</p>
        
            <div className='row'>
                <div className='col-md-5'>
                    <h2>What Brought Platepal to Life?</h2>
                </div>
                <div className='col-md-7'>
                    <p>Meal planning and preparation can take a lot of searching through numerous websites and recipe databases, generating lists, and searching for matching recipes, which is already stressful enough. </p>
                    <p>According to WHO, 16% of the global population, or one in every six of us has a disabilty. When designing applications, people with disabilities are not fully considered in the design process but rather as an afterthought. Because of this, a lot of people with disabilities struggle when using the web.</p>
                    <p>In essence, people with disabilities are denied of the opportunity to enjoy a healthy and fulfilling cooking experience, which makes it extremely important to recognise the current issues brought about by the absence of inclusive tools for meal planning and recipe discovery and improve their experience so that they can participate fully in society without restrictions.</p>
                </div>
            </div>

            <div className='contentCard mt-5 py-3'>
                <h2>🍽️ PlatePal's Recipe for Success</h2>
            </div>
            <p className='py-4'>The goal of this project is to design an application that helps improve the eating habits of users by helping with planning and deciding on what to eat that fits in with their dietary preferences and general health goals, and by putting accessibility first, people with disabilities and the society as a whole benefit from accessible design hereby enhancing usability and overall wellbeing.</p>
        
            <h2 className='pt-5'>Building a Plate for Everyone</h2>
            <p className='pb-3'>To ensure PlatePal caters to a diverse user base, I created four personas based on my research. These personas consider user disabilities, their challenges with existing systems, the assistive technologies they rely on, and the specific situations where they would use PlatePal. I also developed user scenarios to showcase real-world situations where users might encounter specific challenges while planning meals. These helped me understand how users would interact with PlatePal and identify potential pain points to address.</p>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Persona 1 - Physical Impairment.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Scenario 1 - physical impairment.png"/>
                </IKContext>
                <hr className='py-4'/>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Persona 2 - Visual Impairment.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Scenario 2 - visual impairment.png"/>
                </IKContext>
                <hr className='py-4'/>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Persona 3 - Hearing Impairment.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Scenario 3 - hearing impairment.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Scenario 4 - hearing impairment.png"/>
                </IKContext>
                <hr className='py-4'/>

                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Persona 4 - Cognitive Impairment.png"/>
                </IKContext>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/Platepal Scenario 5 - cognitive impairment.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>Optimizing PlatePal for Usability</h2>
            <p>To make sure that the application was optimized for all users including people with disabilities, I made sure to implement these accessibility features based on best practices including; Web Content Accessibility Guidelines (WCAG) compliance, compability with assistive technologies and simple and adjustable interface.</p>

            <h2 className='pt-5'>sketches</h2>
            <p>I wanted to create an interface that was both visually appealing and user-friendly. To achieve this, I aimed to strike a balance between playful elements and practicality to help users  complete their tasks efficiently. I started by sketching out various design solutions to brainstorm ideas and then selected the option that offered the best balance of these goals.</p>
            <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                <IKImage path="/platepal-sketches.png"/>
            </IKContext>
            <p className='pt-5'>The sketches my design concepts which aims to meet the needs of all users. The user interface was sketched to have a clear and organised structure, with whitespaces differentiating between elements while also showing concise navigation between pages in the application. These paper designs explain how I used several WCAG standards to make the application inclusive and accessible for people with disabilities. </p>

            <h2 className='pt-5'>design</h2>
            <p>After solidifying the general layout with paper prototypes, I moved on to creating a high-fidelity version. This allowed me to incorporate the final visual elements like colors, icons, and typography. Accessibility was a major focus. </p>
            <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                <IKImage path="/platepal-element.png"/>
            </IKContext>
            <p className='py-5'>Choosing a colour palette that allows for enough contrast between the the background, typography, and content was vital. (Enhanced contrast in WCAG 1.4.6). To ensure clear visibility, a white background (#FFFFFF) with a minimum contrast ratio of 4.5:1 was combined with a shade of green (#004B23) as the primary colour and the text colour (#0A071A).I decided to use the Urbanist, a modern sans-serif typeface, throughout the entire application's design to improve text readability across platforms because it strikes a good mix between being extremely readable and aesthetically pleasing.</p>

            <h2>inclusive design</h2>
            <p></p>
            <div className="py-5">
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-design1.png"/>
                </IKContext>
            </div>
            <div className="py-5">
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-design2.png"/>
                </IKContext>
            </div>
            <div className="py-5">
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-design3.png"/>
                </IKContext>
            </div>
            <div className="py-5">
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-design4.png"/>
                </IKContext>
            </div>
            <p></p>

            <h2 className='pt-5'>multi-platform accessibility</h2>
            <p>The aim of considering various devices for the application is to create an inclusive user experience for people with different gadget preferences and disabilities. Tablets have larger screens and more interactive capabilities, allowing for a more comprehensive presentation of content. Smartwatches provide a compact and convenient way for users to quickly access information without having to take out their smartphones. By tailoring the application to the unique characteristics of smartphones, smartwatches, and tablets, users can access, interact with, and enjoy the application regardless of their abilities or the device they use.</p>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-ipad1.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-ipad2.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/platepal-watch.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>reflections</h2>
            <p>This project was successful in its goal of developing a more inclusive and accessible mobile app. This project was designed to optimise for accessibility and inclusivity by following a user-centered design process that included personas, scenarios, iterative updates, and adherence to accessibility standards, as well as features that ensured the application was accessible to users with different disabilities.</p>
            <p className='pb-5'>To further improve this application, it would be necessary to continue usability testings with a more diverse group of participants in order to provide a better view of the effect of the application on improving personal autonomy among people with disabilities.  </p>
        
            <div className='pb-5'>
                <p>view prototype <a className='viewlink' target="_blank" href='https://www.figma.com/proto/g9PBS5J3eLh3koeTtyJby9/platepal?page-id=521%3A1202&node-id=521-1382&viewport=323%2C532%2C0.1&t=mylWHyjZlOOC2XQU-1&scaling=scale-down&starting-point-node-id=521%3A1203'>here</a></p>
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

export default PlatePal;