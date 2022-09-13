import React from "react";
import './about.css'
import devImg from "../../assets/cartonDev.png"

export default function About() {
    return (
        <div className="about" id="about">
            <h3 className="pageTitle">About</h3>
            <main>
                <section>
                    <h1>Hi, I'm <span>Gabriel</span>. <br />Nice to meet you.</h1>
                    <h3>I'm a software developer based in São Paulo, Brazil. 🌍</h3>
                    <p>Since 2019, I've been turning code into solutions. When I'm not coding you will find me gaming, reading, or enjoying a beautiful sunset.</p>
                </section>
                <div>
                    <img className="devImg" src={devImg} alt="Image" />
                </div>
            </main>
            <div className="skillsSection">
                <span>My skills:</span>
                <section>
                    <ul>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" /></li>
                        <li><img src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/2306/2306173.png" alt="" /></li>
                        <li><img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" /></li>
                        <li><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--762O-5e0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qy0ctxjhdgvvj6e4ra10.png" alt="" /></li>
                        <li><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="" /></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}