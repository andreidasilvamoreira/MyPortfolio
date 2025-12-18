import "./style.css"
import Card from "./card"
import { useLanguage } from "../../Hooks/useLanguage"

export default function Projects() {
    const { t } = useLanguage();

    return (
        <>
            <section id="projetos" className="div-pai-de-todos-projetos">
                <div className="div-h1"><h1 className="h1-projetos">{t.projects.title}</h1></div>
                <div className="div-pai-projetos">

                    <Card
                        title={t.projects.restaurantApi.title}
                        descricao={t.projects.restaurantApi.description}
                        skills={["Laravel", "MySQL"]}
                        buttonText={t.projects.actions.view}
                    ></Card>

                    <Card
                        title={t.projects.ecommerce.title}
                        descricao={t.projects.ecommerce.description}
                        skills={["Laravel", "React", "MySQL"]}
                        buttonText={t.projects.actions.view}
                    ></Card>

                    <Card
                        title={t.projects.libraryApi.title}
                        descricao={t.projects.libraryApi.description}
                        skills={["Laravel"]}
                        buttonText={t.projects.actions.view}
                    ></Card>
                </div>
            </section>
        </>
    )
}