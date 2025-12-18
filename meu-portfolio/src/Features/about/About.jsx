import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"

export default function About() {
    const { t } = useLanguage()

    return (
        <>
            <div id="sobre" className="div-pai-de-todos-sobre-mim">

                <div className="about-container">

                    <div className="about-text">
                        <h1 className="h1-sobre">{t.about.title}</h1>

                        {t.about.description.map((text, index) => (
                            <p key={index} className="p-descricao">
                                {text}
                            </p>
                        ))}
                    </div>

                    <div className="about-visual"></div>

                </div>
            </div>

        </>
    )
}

