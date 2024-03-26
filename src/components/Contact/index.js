import './index.scss'; // Importing styles from the index.scss file
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'; // Add missing import statement for useRef

const Contact = () => {
    // Define a functional component named Contact
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2q5csmq', 'template_28450cf', refForm.current, {
            publicKey: 'BLsjmhS5RuE7O1j7G'
        }).then(
            () => {
                console.log(sendEmail);
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            (error) => {
                console.log(error);
                console.log('Failed to send the message, please try again');
            }
        );
    };

    return (
        <>
            {' '}
            {/* React fragment shorthand */}
            <div className="container contact-page "></div>{' '}
            {/* Container for contact page */}
            <div className="contact-text text-zone">
                {' '}
                {/* Container for contact text */}
                <h1>Contact me</h1> {/* Heading */}
                <p>
                    I am interested in opportunities in web development and software
                    engineering. As a self-motivated individual, I take consistent action
                    to learn and apply my skills. If you have any questions, feel free to
                    contact me below.
                </p>{' '}
                {/* Paragraph describing contact information */}
                <div className="contact-form">
                    {' '}
                    {/* Container for contact form */}
                    <form ref={refForm} onSubmit={sendEmail}>
                        {' '}
                        {/* Contact form */}
                        <ul>
                            {' '}
                            {/* Unordered list */}
                            <li className="half">
                                {' '}
                                {/* List item with half width */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />{' '}
                                {/* Input field for name */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />{' '}
                                {/* Input field for email */}
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />{' '}
                                {/* Input field for subject */}
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>{' '}
                                {/* Textarea for message */}
                                <button type="submit" className="submit-button">
                                    Submit
                                </button>{' '}
                                {/* Submit button */}
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact; // Exporting the Contact component
