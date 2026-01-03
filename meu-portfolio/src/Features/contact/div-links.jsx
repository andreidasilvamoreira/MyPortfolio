import "./style.css"

export default function Div({ classLink, className, link, url, nome, linha }) {
    return (
        <>
            <div className={classLink}>
                <a className={link} href={url}>
                    <i className={className}></i>
                    {nome}
                </a>
            </div>
            <div className={linha}></div>
        </>
    )
}

export function DivAux({ containerClass, className, as = "p", children }) {

    const Component = as;
    return (
        <div className={containerClass}>
            <Component className={className}>{children}</Component>
        </div>
    )
}