import "./style.css"

export default function A({children, className, href}) {
    return (
        <p href={href} className={className}>{children}</p>
    )
}