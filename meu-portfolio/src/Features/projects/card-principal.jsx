import "./style.css"
import { useLanguage } from "../../shared/Hooks/useLanguage"


export default function CardPrincipal() {
    const { t } = useLanguage();

    return (
        <div className="card card-principal">
            <div className="image">
                <div className="image-overlay"></div>
            </div>
            <div className="itens-card">
                <h2>{t.projects.title}</h2>
                <ul className="list-principal">
                    {t.projects.scheduly.skills.map((skill, index) => (
                        <li key={index} className="list-p">
                            {skill}
                        </li>
                    ))}
                </ul>
                <a href="" className="button-ver-projeto">{t.projects.actions.view}</a>
            </div>
        </div>
    )
}