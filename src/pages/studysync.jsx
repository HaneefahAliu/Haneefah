import React from 'react';
import { Link } from 'react-router-dom';
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react'

import './pages.css';


function StudySync() {
    return (
        <div className="case-study">
        <Link to="/case-studies" className='back-button'>
            <i className="zmdi zmdi-arrow-left"></i>
            <span>all case studies</span>
        </Link>

        <div className='pageContent'>
            <h1>Enhancing teamwork in education: overcoming collaborative challenges.</h1>
            <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                <IKImage path="/studysync.png"/>
            </IKContext>

            <div className='tags d-flex justify-content-between'>
                <h6 className='tag'><span>Role:</span> Research | Protoyping | Visual Design | User Testing</h6>
                <a className='tag' href=''>View Prototype <i className="zmdi zmdi-arrow-right"></i></a>
            </div>

            <h2>overview.</h2>
            <p className='pb-5'>StudySync is an web solution designed to enhance conventional education by encouraging collaboration among students. It acknowledges the limits of traditional, individual-centered strategies and addresses them by offering a dynamic platform for students to work together on projects, assignments, and collaborative tasks.</p>

            <div className='row'>
                <div className='col-md-5'>
                    <h2>why is this a problem???</h2>
                </div>
                <div className='col-md-7'>
                    <p>so the thing is students in traditional learning environments typically work alone, completing assignments and projects on their own. While there is a place for this approach, it ignores the many advantages of a dynamic learning environment, which can result in a number of issues.</p>
                    <div className='contentCard mb-4'>
                        <p className=''><span className='headstyle'>Disengagement: </span>Students may struggle to stay motivated and find solo work boring, which will reduce their focus and participation.</p>
                    </div>
                    <div className='contentCard mb-4'>
                        <p className=''><span className='headstyle'>Limited Perspective: </span>Working alone limits students' exposure to different points of view, making it difficult for them to build a well-rounded understanding of ideas.</p>
                    </div>
                    <div className='contentCard mb-4'>
                        <p className=''><span className='headstyle'>Reduced Responsibility: </span> Individual assignments may result in feelings of isolation and a lack of ownership over learning objectives, thereby reducing student commitment.</p>
                    </div>
                </div>
            </div>

            <p>As such, it is vital to address these challenges in order to establish an environment where students can fully benefit from collaborative learning as education continues to grow and adapt to new requirements.</p>

            <h2 className='pt-5'>research.</h2>
            <p className='pb-3'>To get things started, I carried out extensive research on students and collaborative learning by reviewing academic journals and industry publications to identify and analyse the current challenges and constraints of collaborative learning in educational settings, as well as best practices in designing an inclusive and user-centered solution.</p>
            <p className='pb-3'>While collaborative learning provides a method of dealing with people that respects and recognises the strengths and contributions of individual group member, there are numerous reasons why students could find group learning difficult. </p>
            <p className='pb-3'>Putting students in groups and instructing them to collaborate is barely enough to guarantee natural collaboration. For collaborative learning to be successful, a wide range of features are typically included in these software solutions (Computer-Supported Collaborative Learning) that are designed to enable students and teachers engage in collaborative learning activities. </p>
        
            <p>As soon as these points were established, I interviewed 25 university undergraduate or postgraduate students ranging in age from 18 to 35 to learn about their experiences with collaborative learning, as well as their needs and pain points, and their ideal recommendations for a collaboration system. I was able to acquire several important findings from these interviews, which informed the design choices for this application.</p>
            <IKContext urlEndpoint="https://ik.imagekit.io/0ylai1f4i/Haneefah/">
                <IKImage path="/studysync - insights.png"/>
            </IKContext>
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

export default StudySync;