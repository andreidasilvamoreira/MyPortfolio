import P from "./SubComponents/P-component"
import A from "./SubComponents/A-component"
import "../Body/style.css"

export default function Body() {
    return (
        <>
            <div id="home" className="div-body-pai">
                <div className="div-descricao"><h1 className="h1-nome">Andrei Moreira</h1>
                    <P className="p">Desenvolvedor Full Stack com foco em Backend</P>
                    <P className="p descricao">Construo APIs rápidas, seguras e escaláveis ​​usando PHP, Laravel, MySQL e React.</P>
                    <div className="botao-pai">
                        <A href="#projetos" className="btn projetos">Ver Projetos</A>
                        <A href="#contato" className="btn contato-body">Fale Comigo!</A>
                    </div>
                </div>
                <div><img className="minha-foto" src="/eu.jpeg" alt="" /></div>
            </div>
        </>
    )
}