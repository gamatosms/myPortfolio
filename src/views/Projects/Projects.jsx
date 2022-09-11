import React from "react";
import './projects.css'
import Card from '../../components/Card/Card'
import panela from '../../assets/panela.png'
import todo from '../../assets/todo.png'
import stopsort from '../../assets/stopsort.png'
import detect from '../../assets/detect.png'

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h3 className="pageTitle">Projects</h3>
            <main>
                <section className="sectionProject">
                    <Card
                        imgPath={panela}
                        stacks="Wordpress"
                        title="Panela Aberta"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://panelaaberta.unifesp.br/"
                    />
                    <Card
                        imgPath={detect}
                        stacks="React • TensorFlow • MongoDB"
                        title="Libras Detection"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://github.com/gaamatoss/LibrasDetection"
                    />
                    <Card
                        imgPath={stopsort}
                        stacks="HTML • CSS • Bootstrap"
                        title="Stop Sort"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://stopsort-gaamatoss.vercel.app/"
                    />
                    <Card
                        imgPath={todo}
                        stacks="HTML • CSS • Tailwind"
                        title="Just a To-Do"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://justtodo-gaamatoss.vercel.app/"
                    />
                </section>
            </main>
        </div>
    )
}