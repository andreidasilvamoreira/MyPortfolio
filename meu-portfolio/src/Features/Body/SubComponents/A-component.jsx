import "../style.css";

export default function A({children, className, href}) {
    return (
        <a href={href} className={className}>{children}</a>
    )
}