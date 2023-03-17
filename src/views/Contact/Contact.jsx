import React, { useState } from "react";
import "./contact.css";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineSend,
} from "react-icons/ai";
import { Message, useToaster, Loader } from "rsuite";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";

export default function Contact() {
  const placement = "topStart";
  const toaster = useToaster();

  const messageSuccess = (
    <Message showIcon type="success">
      Message Sent.
    </Message>
  );

  const messageError = (
    <Message showIcon type="error">
      Unable to send your message.
    </Message>
  );

  const loadSender = (
    <Loader content="Sending..." speed="slow" size="md" vertical />
  );
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_m72338m",
        "template_os8nmhe",
        e.target,
        "Guxq_2nJBsHyIEr0I"
      )
      .then(
        function () {
          setIsLoading(false);
          toaster.push(messageSuccess, { placement });
          e.target.reset();
        },
        function (e) {
          toaster.push(messageError, { placement });
          console.log(e);
          e.target.reset();
        }
      );
  }

  return (
    <div className="contact" id="contact">
      <h3 className="page-title">Contact</h3>
      <main>
        <Fade left cascade>
          <div>
            <h1 className="main-title">
              <span>Reach me out!</span>
            </h1>
            <form className="contactForm" onSubmit={sendEmail}>
              <input placeholder="Name:" name="name" type="text" required />
              <input placeholder="E-mail:" name="email" type="email" required />
              <textarea
                name="message"
                placeholder="Type your message:"
                id="message"
                cols="40"
                rows="10"
                required
              />
              {isLoading ? (
                ""
              ) : (
                <button type="submit">
                  Send{" "}
                  <AiOutlineSend size="20px" style={{ marginLeft: "5px" }} />
                </button>
              )}
              {isLoading ? loadSender : ""}
            </form>
            <p style={{ marginBottom: "15px" }}>or</p>
            <nav className="iconNav">
              <a
                className="linkIcon"
                href="https://www.linkedin.com/in/gaamatoss/"
                target="_blank"
              >
                <AiFillLinkedin size="40px" />
              </a>
              <a
                className="instaIcon"
                href="https://instagram.com/gaamatoss"
                target="_blank"
              >
                <AiOutlineInstagram size="40px" />
              </a>
            </nav>
          </div>
        </Fade>
      </main>
    </div>
  );
}
