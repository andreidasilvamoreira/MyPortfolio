import "./style.css"

export default function Div({ className, url, title, value }) {
    return (
            <div className={`link ${className}`}>
                <h4>{title}</h4>
                {url ? (<a className={`link-${className}`} href={url}>{value}</a>) : (
                    <p>{value}</p>
                )}
            </div>
    )
}

export function DivAux({containerClass, className, as = "p", children}) {

    const Component = as;
    return (
            <div className={containerClass}>
                <Component className={className}>{children}</Component>
            </div>
    )
}