import "./style.css"
import { useLanguage } from "../../shared/Hooks/useLanguage"


export default function Card({divClass, h2, descricao, className, api}) {
    const { t } = useLanguage();

    return (
        <div className={divClass}>
            <h2>{h2}</h2>
            <p>{descricao}</p>
            <ul className={className}>
                    {api.map((skill, index) => (
                        <li key={index} className="list">
                            {skill}
                        </li>
                    ))}
                </ul>
        </div>
    )
}