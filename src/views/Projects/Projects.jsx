import React from "react";
import './projects.css'
import { BiLinkExternal } from 'react-icons/Bi'
import panela from '../../assets/panela.png'
import todo from '../../assets/todo.png'
import stopsort from '../../assets/stopsort.png'
import detect from '../../assets/detect.png'
import { Panel, PanelGroup } from 'rsuite';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h3 className="pageTitle">Projects</h3>
            <main>
                <PanelGroup className="projectPanel" accordion defaultActiveKey={1} bordered>
                    <Panel header="Panela Aberta" eventKey={1} id="panel1">
                        <div className="panelContent">
                            <img src={panela} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">Wordpress</span>
                                <p>Blog developed using wordpress for an extension project for students of the nutrition course at Unifesp Santos.</p>
                                <button><a className="visitLink" href="https://panelaaberta.unifesp.br/" target="_blank"><BiLinkExternal size="30px" /></a></button>
                            </section>
                        </div>
                    </Panel>
                    <Panel header="Libras Detection" eventKey={2} id="panel2">
                        <div className="panelContent">
                            <img src={detect} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">React • TensorFlow • MongoDB</span>
                                <p>Platform developed using an artificial intelligence that is able to recognize LIBRAS (Brazilian sign language) to help children's literacy during the pandemic.</p>
                                <button><a className="visitLink" href="https://github.com/gaamatoss/LibrasDetection" target="_blank"><BiLinkExternal size="30px" /></a></button>
                            </section>
                        </div>
                    </Panel>
                    <Panel header="Stop Sort" eventKey={3} id="panel3">
                        <div className="panelContent">
                            <img src={stopsort} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">HTML • CSS • Bootstrap</span>
                                <p>Sorter of letters to play STOP (Brazilian typical game).</p>
                                <button><a className="visitLink" href="https://stopsort-gaamatoss.vercel.app/" target="_blank"><BiLinkExternal size="30px" /></a></button>
                            </section>
                        </div>
                    </Panel>
                    <Panel header="Just a To-Do" eventKey={4} id="panel4">
                        <div className="panelContent">
                            <img src={todo} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">HTML • CSS • Tailwind</span>
                                <p>A simple to-do list.</p>
                                <button><a className="visitLink" href="https://justtodo-gaamatoss.vercel.app/" target="_blank"><BiLinkExternal size="30px" /></a></button>
                            </section>
                        </div>
                    </Panel>
                </PanelGroup>
            </main>
        </div >
    )
}