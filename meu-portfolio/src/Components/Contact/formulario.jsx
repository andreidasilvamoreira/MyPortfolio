import "./style.css"

export default function Form() {
    return (
        <>
            <div className="div-formulario">
                <form className="formulario-contato">
                    <input className="input nome" id="nome" type="text" placeholder="Seu Nome" />
                    <input className="input email" id="emaill" type="text" placeholder="Seu Email" />
                    <textarea className="input mensagem" id="mensagem" type="email" placeholder="Escreva sua mensagem aqui…" />
                    <button className="btn-enviar">Enviar</button>
                </form>
            </div>
        </>
    )
}