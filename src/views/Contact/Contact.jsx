import React from "react";
import './contact.css'
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { Message, useToaster, Divider } from 'rsuite';
import emailjs from "@emailjs/browser"

export default function Contact() {

    const typeSuccess = 'success';
    const typeError = 'error';
    const placement = 'topEnd';
    const toaster = useToaster();

    const messageSuccess = (
        <Message showIcon type={typeSuccess}>
            {typeSuccess}: Message Sent.
        </Message>
    );

    const messageError = (
        <Message showIcon type={typeError}>
            {typeError}: Message not sent.
        </Message>
    );


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_m72338m", "template_os8nmhe", e.target, "Guxq_2nJBsHyIEr0I")
            .then(function () {
                toaster.push(messageSuccess, { placement })
                e.target.reset();
            }, function (e) {
                toaster.push(messageError, { placement })
                console.log(e);
                e.target.reset();
            });
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