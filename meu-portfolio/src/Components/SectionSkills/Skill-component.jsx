import "./style.css";

export default function CardSkill({ titulo, skills }) {
    return (
        <div className="skill-category">
            <h1 className="skill-title">{titulo}</h1>

            <div className="container-skill">
                {skills.map((item) => (
                    <p key={item} className="card-skill-skill">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
