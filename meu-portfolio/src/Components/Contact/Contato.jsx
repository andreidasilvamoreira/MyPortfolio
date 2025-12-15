import "./style.css";

export function Contato() {
    return (
        <>
            <section id="contato" className="div-contato-pai-de-todos">
                <div className="contato-pai">
                    <div className="contato">
                        <h1 className="h1-contato">Contato</h1>
                    </div>
                    <div className="div-contato">
                        <p className="p-contato">Se quiser conversar sobre projetos, ideias ou oportunidades, fique à vontade para entrar em contato.</p>
                    </div>
                </div>
                <div className="div-contato-form">
                    <div className="links-contato">
                        <div className="link linkedin">
                            <h4>LinkedIn</h4>
                            <a className="link-linkedin" href="http://www.linkedin.com/in/andreidasilvamoreira">Andrei-da-Silva-Moreira</a>
                        </div>
                        <div className="link github">
                            <h4>GitHub</h4>
                            <a className="link-github" href="https://github.com/andreidasilvamoreira">andreidasilvamoreira</a>
                        </div>
                        <div className="link email"><h4>Email:</h4>
                            <p>andreidasilvamoreira14@gmail.com</p>
                        </div>
                        <div className="link telefone">
                            <h4>Telefone:</h4>
                            <p>+55 62 99351-3125</p>
                        </div>
                    </div>
                    <div className="div-formulario">
                        <form className="formulario-contato">
                            <input className="input nome" id="nome" type="text" placeholder="Nome" />
                            <input className="input email" id="emaill" type="text" placeholder="Email" />
                            <textarea className="input mensagem" id="mensagem" type="email" placeholder="Mensagem" />
                            <button className="btn-enviar">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}