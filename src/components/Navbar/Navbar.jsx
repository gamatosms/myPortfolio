import React, { useState } from "react";
import './navbar.css'
import { AiOutlineHome, AiOutlineMessage } from '/node_modules/react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'
import { BiMenuAltRight } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { motion } from "framer-motion"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const hamburguerIcon = <BiMenuAltRight className="hamburguer"
        size='50px' onClick={() => setIsOpen(!isOpen)} />
    const closeIcon = <CgClose className="close"
        size='50px' onClick={() => setIsOpen(!isOpen)} />
    const closeMbNav = () => setIsOpen(false)
    const animateFrom = { opacity: 0, y: -20 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <div>
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="#home"><AiOutlineHome size="33px" color="white" /></a></li>
                    <li><a href="#about"><BsPerson size="33px" color="white" /></a></li>
                    <li><a href="#projects"><RiComputerLine size="33px" color="white" /></a></li>
                    <li><a href="#contact"><AiOutlineMessage size="33px" color="white" /></a></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav className="mb__nav">
            {isOpen ? closeIcon : hamburguerIcon}
            {isOpen &&
                <ul onClick={closeMbNav}>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }}>
                        <a href="#home">Home</a>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.25 }}>
                        <a href="#about">About</a>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }}>
                        <a href="#projects">Projects</a>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.35 }}>
                        <a href="#contact">Contact</a>
                    </motion.li>
                </ul>
            }
        </nav>
        </div>
        </div>
    )
}