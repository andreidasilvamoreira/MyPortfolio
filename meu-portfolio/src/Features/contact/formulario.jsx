import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"

export default function Form() {
        const { t } = useLanguage()
    
    return (
        <>
            <div className="div-formulario">
                <form className="formulario-contato">
                    <input className="input nome" id="nome" type="text" placeholder={t.contact.form.name} />
                    <input className="input email" id="emaill" type="text" placeholder={t.contact.form.email} />
                    <textarea className="input mensagem" id="mensagem" type="email" placeholder={t.contact.form.message} />
                    <button className="btn-enviar">{t.contact.form.send}</button>
                </form>
            </div>
        </>
    )
}