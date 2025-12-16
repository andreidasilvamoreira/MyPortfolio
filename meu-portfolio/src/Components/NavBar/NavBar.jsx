import "./style.css"
import A from "../Body/SubComponents/A-component"

export default function NavBar() {
    return (
        <>
            <div className="nav-bar-pai">
                <a href="#home">
                    <i className="fa-solid fa-house"></i>
                </a>
                <div className="navContent">
                    <A href="#projetos" className="Projetos">Projetos</A>
                    <A href="#skills" className="Skills">Habilidades</A>
                    <A href="#sobre" className="Sobre">Sobre</A>
                    <A href="#contato" className="Contato">Contatos</A>
                </div>
            </div>
        </>
    )
}