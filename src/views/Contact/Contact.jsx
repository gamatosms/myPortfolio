import React from "react";
import './contact.css'
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/Ai'
import emailjs from "@emailjs/browser"

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_m72338m", "template_os8nmhe", e.target, "Guxq_2nJBsHyIEr0I")
            .then(function () {
                alert('SUCCESS!');
            }, function (error) {
                alert('FAILED...', error);
            });
        e.target.reset();
    }

    return (
        <div className="contact" id="contact">
            <h3 className="pageTitle">Contact</h3>
            <main>
                <div>
                    <h1 className="mainTitle">Reach me out!</h1>
                    <form className="contactForm" onSubmit={sendEmail}>
                        <input placeholder="Name:" name="name" type="text" required />
                        <input placeholder="E-mail:" name="email" type="email" required />
                        <textarea name="message" placeholder="Type your message" id="message" cols="40" rows="10" required />
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