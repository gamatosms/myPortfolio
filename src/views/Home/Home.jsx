import React from "react";
import './home.css'
import { TbArrowBigUpLines } from 'react-icons/Tb'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/Ai'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className="home" id="home">
            <h3 className="pageTitle">Home</h3>
            <main className="mainDiv" >
                <motion.section className="secondDiv" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }} >
                    <h1 className="mainTitle">Gabriel Matos</h1>
                    <p>FullStack Developer | Passionate about games, art and sunny days 👨‍🎨🕹️</p>
                    <div className="iconDiv">
                        <a className="linkIcon" href="https://www.linkedin.com/in/gaamatoss/" target="_blank"><AiFillLinkedin size="40px" /></a>
                        <a className="gitIcon" href="https://github.com/gaamatoss" target="_blank"><AiFillGithub size="40px" /></a>
                        <a className="gitIcon" href="https://instagram.com/gaamatoss" target="_blank"><AiOutlineInstagram size="40px" /></a>
                    </div>
                </motion.section>
            </main>
            <a href="#about"><TbArrowBigUpLines className="downIcon" size="20px" /></a>
        </div>
    )
}