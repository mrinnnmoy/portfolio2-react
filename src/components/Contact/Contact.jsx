import React from 'react';
import "./Contact.scss";
import { contacts } from '../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="container" id="contact">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="title"
            >
                <span>get in touch</span>
                <h1>Contact Me</h1>
            </motion.div>
            <div className="contact_form">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='contact_left_container'>
                    <h3>Just Say Hi</h3>
                    <p className='contact_text'>Thank you for considering me for your open
                        SDE or Developer Advocacy role. If you have any questions or just want
                        to get in touch, please feel free to reach out via this form or on LinkedIn.
                        I am also open to participating in hackathons and discussing the latest
                        tech trends. Looking forward to hearing from you!</p>
                    {contacts.map(contact => {
                        return (
                            <div className='contact_left' key={contact.id}>
                                <div className="icon">
                                    {contact.icon}
                                </div>
                                <p>{contact.infoText}</p>
                            </div>
                        )
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="contact_right"

                >
                    <h3>Get In Touch</h3>
                    <form action="https://getform.io/f/fc6ab614-5449-4b97-a1fa-33f184b3c2be" method="POST">
                        <div className="row">
                            <input type="text" name="name" placeholder='Name' />
                        </div>
                        <div className="row">
                            <input type="text" name="phone" placeholder='Phone' />
                            <input type="email" name="email" placeholder='Email' />
                        </div>
                        <div className="row">
                            <textarea name="message" placeholder='Message'></textarea>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="btn"
                        >
                            <button href="#home">Send</button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
};

export default Contact;