import "./style.css"
import { useLanguage } from "../../shared/Hooks/useLanguage"
import CardPrincipal from "./card-principal"
import Card from "./card"
import CardSecundario from "./card-secundario";


export default function Projects() {
    const { t } = useLanguage();
    return (
        <>
            <section id="projetos" className="div-pai-de-todos-projetos">
                <h1 className="h1-projetos">{t.projects.title}</h1>
                <div className="div-pai-projetos">
                    <div className="cards">
                        <CardPrincipal />
                        <CardSecundario/>
                        <Card divClass={"card card-one"} h2={t.projects.libraryApi.title} descricao={t.projects.libraryApi.description} className={"list-skills"} api={t.projects.libraryApi.skills} />
                        <Card divClass={"card card-two"} h2={t.projects.restaurant.title} descricao={t.projects.restaurant.description} className={"list-skills"} api={t.projects.restaurant.skills} />   
                    </div>
                </div>
            </section>
        </>
    )
}