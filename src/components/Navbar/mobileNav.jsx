import React, { useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { motion } from "framer-motion"


export default function mobileNav() {

    const [isOpen, setIsOpen] = useState(false)
    const hamburguerIcon = <BiMenuAltRight className="hamburguer"
        size='40px' onClick={() => setIsOpen(!isOpen)} />
    const closeIcon = <CgClose className="close"
        size='40px' onClick={() => setIsOpen(!isOpen)} />

    const closeMbNav = () => setIsOpen(false)
    const animateFrom = { opacity: 0, y: -20 }
    const animateTo = { opacity: 1, y: 0 }


    return (
        <nav className="mb__nav">
            {isOpen ? closeIcon : hamburguerIcon}
            {isOpen &&
                <ul isMobile={true} onClick={closeMbNav}>
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
    )
}