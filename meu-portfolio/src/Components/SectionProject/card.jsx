import "./style.css";

export default function Card({ title, descricao, skills = [], buttonText, className }) {
    return (
        <div className="card">
            <h3 className="titulo-projeto">{title}</h3>

            <p className="p-projeto">{descricao}</p>

            <div className="sessao-skill">
                {skills.map((skill, index) => (
                    <p key={index} className="card-skill">{skill}</p>
                )
                )}
            </div>
            <button className="btn-projeto">
                {buttonText}
            </button>
        </div>
    );
}
