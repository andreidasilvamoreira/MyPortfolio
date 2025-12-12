import "./style.css"
import A from "../Body/SubComponents/A-component"

export default function NavBar() {
    return (
        <>
            <div className="nav-bar-pai">
                <div className="navContent">
                    <A href="#projetos" className="Projetos">Projects</A>
                    <A href="#skills" className="Skills">Skills</A>
                    <A href="#sobre" className="Sobre">About</A>
                    <A href="#contato" className="Contato">Contacts</A>
                </div>
            </div>
        </>
    )
}