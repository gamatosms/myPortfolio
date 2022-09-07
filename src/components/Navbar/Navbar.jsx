import React from "react";
import './navbar.css'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/Ai'
import { BsPerson } from 'react-icons/Bs'
import { RiComputerLine } from 'react-icons/Ri'

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