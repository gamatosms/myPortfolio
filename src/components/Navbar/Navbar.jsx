import React from "react";
import './navbar.css'
import { AiOutlineHome, AiOutlineMessage } from '/node_modules/react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'

export default function Navbar() {
    return (
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
    )
}