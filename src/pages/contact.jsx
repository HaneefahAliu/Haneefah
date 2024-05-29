import React from 'react';

function Contact() {
    return (
        <div className="content">
            <div className='contact'>
                <h1>Let’s create magic together!</h1>
                <p>Do you have a question/interesting ideas or projects? Leave a message and I'll get back to you.</p>
                <a href="mailto:aliuhaneefah@gmail.com">aliuhaneefah@gmail.com</a>
            </div>

            <div className='social'>
                <p>You can also find me on social media</p>
                <div className='d-flex'>
                    <a target="_blank" href='https://www.linkedin.com/in/haneefah-aliu-6a8a21160/' >linkedin</a>
                    <a target="_blank" href='https://www.instagram.com/haneefah.design/' >instagram</a>
                    <a target="_blank" href='https://github.com/HaneefahAliu' >github</a>
                    <a target="_blank" href='https://medium.com/@haneefahaliu' >medium</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;