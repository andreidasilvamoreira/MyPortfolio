import "../SectionSkills/style.css"

export default function Skills() {
    return (
        <>
            <section id="skills" className="pai-de-todos-skills">
                <div className="skill-div">
                    <h1 className="h1-skills">Hard Skills</h1>
                </div>
                <div className="div-centralizar">
                    <div className="div-pai-Skills">
                        <div>
                            <div className="div-back-end">
                                <h1 className="back-end">Back-end</h1>
                                <div className="container-skill">
                                    <p className="card-skill-skill">PHP</p>
                                    <p className="card-skill-skill">Laravel</p>
                                    <p className="card-skill-skill">Axios</p>
                                </div>
                            </div>

                            <div className="div-front-end">
                                <h1 className="front-end">Front-end</h1>
                                <div className="container-skill">
                                    <p className="card-skill-skill">React</p>
                                    <p className="card-skill-skill">JavaScript</p>
                                    <p className="card-skill-skill">HTML5</p>
                                    <p className="card-skill-skill">CSS3</p>
                                </div>
                            </div>
                            <div className="div-banco-de-dados">
                                <h1 className="banco-de-dados">Banco de Dados</h1>
                                <div className="container-skill">
                                    <p className="card-skill-skill">MySQL</p>
                                    <p className="card-skill-skill">SQLite</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="softSkills">
                        <div className="div-metodologia">
                            <h1 className="metodologia">Metodologias e Boas Práticas</h1>
                            <div className="container-skill"> <p className="card-skill-skill">Scrum</p>
                                <p className="card-skill-skill">Kanban</p> <p className="card-skill-skill">Padrão REST</p>
                                <p className="card-skill-skill">Clean Code</p> </div>
                        </div>
                        <div className="div-ferramenta">
                            <h1 className="ferramentas">Ferramentas</h1> <div className="container-skill">
                                <p className="card-skill-skill">Git</p> <p className="card-skill-skill">GitHub</p>
                                <p className="card-skill-skill">VSCode</p> <p className="card-skill-skill">PhpStorm</p>
                                <p className="card-skill-skill">Postman</p> <p className="card-skill-skill">Insomnia</p>
                                <p className="card-skill-skill">MySQL Workbench</p> </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}