import Div, {DivAux} from "./div-links";
import Form from "./formulario";
import "./style.css";

export function Contato() {
    return (
        <>
            <section id="contato" className="div-contato-pai-de-todos">
                <div className="contato-pai">
                    <DivAux className="h1-contato" containerClass="contato" as="h1">
                        Contato
                    </DivAux>
                    <DivAux className="p-contato" containerClass="div-contato">
                        Se quiser conversar sobre projetos, ideias ou oportunidades, fique à vontade para entrar em contato.
                    </DivAux>
                </div>
                <div className="div-contato-form">
                    <div className="links-contato">
                        <Div title="LinkedIn:" className="linkedin" url="http://www.linkedin.com/in/andreidasilvamoreira" value="Andrei-da-Silva-Moreira" />
                        <Div title="GitHub:" className="github" url="https://github.com/andreidasilvamoreira" value="andreidasilvamoreira" />
                        <Div title="Email:" className="email" value="andreidasilvamoreira14@gmail.com" />
                        <Div title="Telefone:" className="telefone" value="+55 62 99351-3125" />
                    </div>
                    <Form />
                </div>
            </section>
        </>
    )
}