import React, { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import { ref, getDownloadURL } from 'firebase/storage';
import './pages.css';

function PlatePal() {
    const [images, setImages] = useState({
        cover: '',
        persona1:'',
        persona2:'',
        persona3:'',
        persona4:'',
        sketches: '',
        element: '',
        ipad1: '',
        ipad2: '',
        watch: '',
        design: '',
    });

    useEffect(() => {
        // Function to get URL for a single image
        const loadImage = async (imagePath) => {
            const imageRef = ref(storage, `platepal/${imagePath}`);
            return await getDownloadURL(imageRef);
        };

        // Load all images
        const loadAllImages = async () => {
            try {
                const urls = {
                    cover: await loadImage('cover.png'),
                    persona1: await loadImage('persona1.png'),
                    persona2: await loadImage('persona2.png'),
                    persona3: await loadImage('persona3.png'),
                    persona4: await loadImage('persona4.png'),
                    sketches: await loadImage('sketches.png'),
                    element: await loadImage('element.png'),
                    ipad1: await loadImage('ipad1.png'),
                    ipad2: await loadImage('ipad2.png'),
                    watch: await loadImage('watch.png'),
                    design: await loadImage('design.png'),
                };
                setImages(urls);
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        loadAllImages();
    }, []);

    return (
        <div className="case-study">
            <div className='pageContent'>   
                <h5>PlatePal</h5>
                <h1>Building Better Eating Habits through Smart Meal Planning Technology.</h1>
                <img className='pt-3 pb-5' src={images.cover} alt="" />

                <div className='d-flex justify-content-between pb-5'>
                    <div className="summary">
                        <h6>Summary:</h6>
                        <p className='pb-5'>This detailed project includes everything from executing in-depth user research on common cooking pain points to designing an accessible recipe interface, crafting engaging culinary art direction, and creating seamless product visualisations that bring recipes to life. Working on this project, I successfully streamlined the meal planning process, making home cooking more accessible and enjoyable for people of all skill levels.</p>

                        <h6>Prototype:</h6>
                        <a target="_blank" href='https://www.figma.com/proto/g9PBS5J3eLh3koeTtyJby9/platepal?page-id=521%3A1202&node-id=526-4532&viewport=323%2C532%2C0.1&t=rKiyCAj19kmAVvvo-1&scaling=scale-down&starting-point-node-id=521%3A1203'>View here</a>
                    </div>
                    <div className="role">
                        <h6>Responsibilities:</h6>
                        <p className='pb-5'>UX Research, Accessibility, UI Design, Prototyping, user Testing.</p>

                        <h6>Delivearables:</h6>
                        <p>User Research, High Fidelity Designs, Interactive Prototype, Design Assets.</p>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-3">
                        <h2>overview</h2>
                    </div>
                    <div className="col-md-9">
                        <p className='pb-5'>PlatePal is a meal planning and recipe application that helps to improve the cooking experience and make meal preparation simpler and less frustrating. PlatePal is designed to create a possible solution to the issues faced by individuals when trying to plan meals and search for recipes online.</p>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>What Brought Platepal to Life?</h2>
                    </div>
                    <div className="col-md-9">
                    <p>Meal planning and preparation can take a lot of searching through numerous websites and recipe databases, generating lists, and searching for matching recipes, which is already stressful enough. </p>
                        <p>According to WHO, 16% of the global population, or one in every six of us has a disabilty. When designing applications, people with disabilities are not fully considered in the design process but rather as an afterthought. Because of this, a lot of people with disabilities struggle when using the web.</p>
                        <p>In essence, people with disabilities are denied of the opportunity to enjoy a healthy and fulfilling cooking experience, which makes it extremely important to recognise the current issues brought about by the absence of inclusive tools for meal planning and recipe discovery and improve their experience so that they can participate fully in society without restrictions.</p>
                    </div>
                </div>

                <div className='contentCard mb-5'>
                    <h2 className='py-3'>🍽️ PlatePal's Recipe for Success</h2>
                    <p>The goal of this project is to design an application that helps improve the eating habits of users by helping with planning and deciding on what to eat that fits in with their dietary preferences and general health goals, and by putting accessibility first, people with disabilities and the society as a whole benefit from accessible design hereby enhancing usability and overall wellbeing.</p>
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>building a Plate for Everyone</h2>
                    </div>
                    <div className="col-md-9">
                        <p>To ensure PlatePal caters to a diverse user base, I created four personas based on my research. These personas consider user disabilities, their challenges with existing systems, the assistive technologies they rely on, and the specific situations where they would use PlatePal. I also developed user scenarios to showcase real-world situations where users might encounter specific challenges while planning meals. These helped me understand how users would interact with PlatePal and identify potential pain points to address.</p>
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
                        <h2>optimizing PlatePal for usability</h2>
                    </div>
                    <div className="col-md-9">
                        <p>To make sure that the application was optimized for all users including people with disabilities, I made sure to implement these accessibility features based on best practices including; Web Content Accessibility Guidelines (WCAG) compliance, compability with assistive technologies and simple and adjustable interface.</p>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>sketches</h2>
                    </div>
                    <div className="col-md-9">
                        <p>I wanted to create an interface that was both visually appealing and user-friendly. To achieve this, I aimed to strike a balance between playful elements and practicality to help users  complete their tasks efficiently. I started by sketching out various design solutions to brainstorm ideas and then selected the option that offered the best balance of these goals.</p>
                    </div>
                </div>

                <img className='pb-3' src={images.sketches} alt="" />
                <p className='pb-5'>The sketches represent my design concepts, which are intended to fulfil the needs of all users. The user interface was designed to have a clean and structured layout, with whitespaces distinguishing between objects and displaying concise navigation between pages in the program. These paper drawings demonstrate how I applied numerous WCAG criteria to make the application inclusive and accessible to individuals with impairments. </p>

                <div className="row pt-5">
                    <div className="col-md-3">
                        <h2>the design</h2>
                    </div>
                    <div className="col-md-9">
                        <p>After solidifying the general layout with paper prototypes, I moved on to creating a high-fidelity version. This allowed me to incorporate the final visual elements like colors, icons, and typography. Accessibility was a major focus.</p>
                    </div>
                </div>

                <img className='pb-3' src={images.element} alt="" />
                <p>Choosing a colour palette that allows for enough contrast between the the background, typography, and content was vital. (Enhanced contrast in WCAG 1.4.6). To ensure clear visibility, a white background (#FFFFFF) with a minimum contrast ratio of 4.5:1 was combined with a shade of green (#004B23) as the primary colour and the text colour (#0A071A).I decided to use the Urbanist, a modern sans-serif typeface, throughout the entire application's design to improve text readability across platforms because it strikes a good mix between being extremely readable and aesthetically pleasing.</p>
                <img className='pb-3' src={images.design} alt="" />
                
                <div className="row py-5">
                    <div className="col-md-3">
                        <h2>multi-platform accessibility</h2>
                    </div>
                    <div className="col-md-9">
                        <p>The aim of considering various devices for the application is to create an inclusive user experience for people with different gadget preferences and disabilities. Tablets have larger screens and more interactive capabilities, allowing for a more comprehensive presentation of content. Smartwatches provide a compact and convenient way for users to quickly access information without having to take out their smartphones. By tailoring the application to the unique characteristics of smartphones, smartwatches, and tablets, users can access, interact with, and enjoy the application regardless of their abilities or the device they use.</p>
                    </div>
                </div>

                <div>
                    <img className='pb-5' src={images.ipad1} alt="" />
                    <img className='pb-5' src={images.ipad2} alt="" />
                    <img className='pb-5' src={images.watch} alt="" />
                </div> 

                <div className="row pt-5">
                    <div className="col-md-3">
                        <h2>reflections</h2>
                    </div>
                    <div className="col-md-9">
                        <p>This project was successful in its goal of developing a more inclusive and accessible mobile app. This project was designed to optimise for accessibility and inclusivity by following a user-centered design process that included personas, scenarios, iterative updates, and adherence to accessibility standards, as well as features that ensured the application was accessible to users with different disabilities.</p>
                        <p className='pb-5'>To further improve this application, it would be necessary to continue usability testings with a more diverse group of participants in order to provide a better view of the effect of the application on improving personal autonomy among people with disabilities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatePal;