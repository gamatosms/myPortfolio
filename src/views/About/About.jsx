import React from "react";
import './about.css'
import devImg from "../../assets/avatarMe.png"
import resume from "../../assets/Resume.pdf"

export default function About() {
    return (
        <div className="about" id="about">
            <h3 className="pageTitle">About</h3>
            <main>
                <section>
                    <h1>Hi, I'm <span>Gabriel</span>. <br />Nice to meet you.</h1>
                    <h3>I'm a software developer based in São Paulo, Brazil. 🌍</h3>
                    <p>Since 2019, I've been turning code into solutions. <br/>When I'm not coding you will find me gaming, reading, or enjoying a beautiful sunset.</p>
                    <button className="btn__download"><a href={resume} download="Resume">Download CV</a></button>
                </section>
                <div>
                    <img className="devImg" src={devImg} alt="Image" />
                </div>
            </main>
        </div>
    )
}