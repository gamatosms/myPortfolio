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
                    <form className="contactForm" action="https://formsubmit.co/gsilva505.gs@gmail.com" method="POST">
                        <input placeholder="Name:" name="text" type="text" required />
                        <input type="hidden" name="_subject" value="New submission in your site!" />
                        <input placeholder="E-mail:" name="email" type="email" required />
                        <input type="hidden" name="_captcha" value="false" />
                        <textarea name="messageArea" placeholder="Type your message" id="message" cols="40" rows="10" required />
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