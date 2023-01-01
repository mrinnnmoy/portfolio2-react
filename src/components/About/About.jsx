import React from 'react';
import "./About.scss";
import { motion } from 'framer-motion';
import { bios } from '../../Data';
import portfolio from "../../assets/mrinmoy.jpg";

const About = () => {
    return (
        <div className="container" id="about">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="title">
                <span>Who Am I ?</span>
                <h1>About Me</h1>
            </motion.div>
            <div className="about_container">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="about_left">
                    <motion.img src={portfolio}
                        whileHover={{ y: -48, x: -55 }}
                        transition={{ duration: 0.3 }}
                        alt="portfolio" />
                </motion.div>
                <motion.div className="about_right"
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p>Learner 📑 | Technical Writer ✍️ | Front-End Developer | MERN ❤️ | Blockchain enthusiast 🚀 |</p>
                    {bios.map(bio => {
                        return (
                            <div className="bio" key={bio.id}>
                                <span className="bioIcon">{bio.icon}</span>
                                <span className="bioKeys">{bio.keys}</span>
                                <span className="bioValue">{bio.value}</span>
                            </div>
                        )
                    })}
                    <motion.a href="#" download=""
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}>
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
};

export default About;