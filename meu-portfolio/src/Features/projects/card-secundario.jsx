import "./style.css"
import { useLanguage } from "../../shared/Hooks/useLanguage"


export default function CardSecundario() {
    const { t } = useLanguage();

    return (
        <div className="card card-secundario">
            <h2>{t.projects.ecommerce.title}</h2>
            <p>{t.projects.ecommerce.description}</p>
            <a href="" className="button-ver-projeto">{t.projects.actions.view}</a>
        </div>
    )
}