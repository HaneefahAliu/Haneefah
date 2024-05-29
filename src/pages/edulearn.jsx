import React from 'react';
import { Link } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react'

import './pages.css';

function EduLearn() {
    return (
        <div className="case-study">
        <Link to="/case-studies" className='back-button'>
            <i className="zmdi zmdi-arrow-left"></i>
            <span>all case studies</span>
        </Link>

        <div className='pageContent'>
        <h1>EduLearn - Empowering Teachers, Engaging Students: A UX Case Study</h1>
            <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                <IKImage path="/edulearn-cover.png"/>
            </IKContext>

            <div className='tags d-flex justify-content-between'>
                <h6 className='tag'><span>Role:</span> Research  | Visual Design  </h6>
                {/* <a className='tag' target="_blank" href='https://www.figma.com/proto/g9PBS5J3eLh3koeTtyJby9/platepal?page-id=521%3A1202&node-id=526-4532&viewport=323%2C532%2C0.1&t=rKiyCAj19kmAVvvo-1&scaling=scale-down&starting-point-node-id=521%3A1203'>View Prototype <i className="zmdi zmdi-arrow-right"></i></a> */}
            </div>

            <h2>overview.</h2>
            <p className='pb-5'>Learning is a very important part of life. EduLearn is an online educational platform designed to make teaching easier by extending learning beyond the physical classroom. By providing interactive tools and fostering a connected learning environment, EduLearn empowers teachers and ignites student potential.</p>
        
            <h2>why Edulearn?</h2>
            <p className='pb-5'>Due to the disorganisation caused by the COVID-19 pandemic, going physically to school has become extremely difficult and most schools have had to move the bulk of their learning online to help reduce the spread of the virus. Teaching, assigning and evaluating assessments, examinations and all other school activities are carried out on the internet.</p>

            <div className='contentCard mb-5'>
                <h2 className='py-3'>🎯 goal</h2>
                <p>create a platform where the online teaching-learning process would be as easy and effective as the physical method. This platform focuses on providing a comprehensive solution; from sharing learning materials, assigning and evaluating assessments, to tracking progress.</p>
            </div>

            <h2>research.</h2>
            <p>The first thing I did was to understand what this project was about and who my potential users are and the problems they are facing. This research strives to answer questions like; who is my target audience? What difficulties are they facing? how can i solve these problems?. After finding my target audience, I conducted a semi-structured interview with my target audience (students, teaching professionals and institutions). My goal during this interview was to;</p>
            <ul>
                <li>Know how they have been carrying out learning and teaching since the pandemic.</li>
                <li>Understand the problems they face while using these tools.</li>
            </ul>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-research.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>Understanding the Market</h2>

            <h2 className='pt-5'>Unlocking User Needs.</h2>
            <p>It is very important to clearly identify and define your problem statement. In this stage, I focused on the two groups that represent the target user groups pf this application.  </p>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-student.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-teacher.png"/>
                </IKContext>
            </div>
            <p className='pb-5'>Once I was able to identify the pain points, I proceeded to card sort,  design the information architecture and task flows for the application.</p>

            <h2 className='pt-5'>Card Sorting.</h2>
            <p>I had some participants participate in a card sorting session. I used this to ascertain how users understand and categorise information and used this as a basis for my information architecture.</p>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-sort.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>information architecture.</h2>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-IA.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>task flows.</h2>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-TF.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>style guide.</h2>
            <p className='pb-3'>write something</p>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-style.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>the design.</h2>
            <p className='pb-5'>For this project, my aim was to make the design as simple and straightforward as possible. This platform would be used by students of all age groups, so it is very important that it was not a complex design.</p>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/eduleran-landing.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-design1.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-2.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-3.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-design4.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-5.png"/>
                </IKContext>
            </div>
            <div className='pb-5'>
                <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                    <IKImage path="/edulearn-6.png"/>
                </IKContext>
            </div>

            <h2 className='pt-5'>reflections</h2>
            <p className='pb-5'>The entire project was a great and exciting learning experience for me. This was my first experience creating a full project and I was able to challenge myself in new ways. I gave plenty of focus and importance to the overall Ux design process and not focus on just aesthetics and fancy visuals.</p>
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

export default EduLearn;