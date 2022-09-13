import React from "react";
import './contact.css'
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/Ai'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h3 className="pageTitle">Contact</h3>
            <main>
                <div>
                    <h1 className="mainTitle">Reach me out!</h1>
                    <form className="contactForm" action="">
                        <input placeholder="Name:" type="text" />
                        <input placeholder="E-mail:" type="text" />
                        <textarea name="messageArea" placeholder="Type your message" id="message" cols="40" rows="10"></textarea>
                        <button type="submit">Send</button>
                    </form>
                    <hr />
                    <nav className="iconNav">
                        <a className="linkIcon" href="https://www.linkedin.com/in/gaamatoss/" target="_blank"><AiFillLinkedin size="40px" /></a>
                        <a className="instaIcon" href="https://instagram.com/gaamatoss" target="_blank"><AiOutlineInstagram size="40px" /></a>
                    </nav>
                </div>
            </main>
        </div>
    )
}