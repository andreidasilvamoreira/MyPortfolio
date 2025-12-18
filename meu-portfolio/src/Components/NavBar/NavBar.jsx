import "./style.css"
import A from "../Body/SubComponents/A-component"
import { LanguageSelect } from "./SelectLanguage"
import { useLanguage } from "../../Hooks/useLanguage";

export default function NavBar() {
    const { t } = useLanguage();

    return (
        <>
            <div className="nav-bar-pai">
                <a href="#home">
                    <i className="fa-solid fa-house"></i>
                </a>
                <div className="navContent">
                    <LanguageSelect />
                    <A href="#projetos" className="Projetos">{t.nav.projects}</A>
                    <A href="#skills" className="Skills">{t.nav.skills}</A>
                    <A href="#sobre" className="Sobre">{t.nav.about}</A>
                    <A href="#contato" className="Contato">{t.nav.contact}</A>
                </div>
            </div>
        </>
    )
}