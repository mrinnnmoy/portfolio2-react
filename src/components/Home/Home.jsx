import React from 'react';
import { motion } from 'framer-motion';
import portfolio from "../../assets/mrinmoy.jpg";
import "./Home.scss";

const Home = () => {
    const moveVariants = {
        animation: {
            y: [0, -15],
            transition: {
                yoyo: Infinity,
                duration: 2,
                delay: 1
            }
        }
    };

    const moveProfile = {
        animation: {
            x: [0, -15],
            transition: {
                yoyo: Infinity,
                duration: 2,
                delay: 1
            }
        }
    };

    return (
        <motion.div className="container" id="home"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
                {
                    duration: 2,
                    delay: 0.5
                }
            }
        >
            <div className="profile">
                <img src={portfolio} alt="portfolio" loading="lazy" />
            </div>
            <div className="profile_text">
                <h3 className="name">Hi, I am <span>Mrinmoy Porel</span></h3>
                <span className="job">Software Developer</span>
                <span className="text">Passionate<br /> to craft innovative <br />  web products.</span>
                <motion.a href="#contact"
                    whileHover={{ scale: 1.1 }}
                    variants={moveVariants}
                    animate="animation"
                >Connect with me.</motion.a>
                <motion.div
                    variants={moveProfile}
                    animate="animation"
                    className="writer">Technical Writer</motion.div>
                <motion.div 
                    variants={moveProfile}
                    animate="animation"
                    className="web">Web Developer</motion.div>
                <motion.div 
                    variants={moveProfile}
                    animate="animation"
                    className="blockchain">BlockChain</motion.div>
            </div>
            <div className="mouse">
                <div className="mouse-wheel"></div>
            </div>
        </motion.div>
    )
};

export default Home;