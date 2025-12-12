import "./style.css"

export default function P({children, className}) {
    return (
        <p className={className}>{children}</p>
    )
}