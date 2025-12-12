import "./style.css"
import Card from "./card"

export default function Projects() {

    return (
        <>
            <section id="projetos" className="div-pai-de-todos-projetos">
                <div className="div-h1"><h1 className="h1-projetos">Projects</h1></div>
                <div className="div-pai-projetos">
                    
                    <Card
                        title="API de Restaurante"
                        descricao="CRUD completo para pedidos, clientes e itens de menu"
                        skills={["Laravel", "MySQL"]}
                        buttonText="Ver Projeto"
                    ></Card>

                    <Card
                        title="E-commerce Full Stack"
                        descricao="Carrinho, login com token e gerenciamento de produtos"
                        skills={["Laravel", "React", "MySQL"]}
                        buttonText="Ver Projeto"
                    ></Card>

                    <Card
                        title="API Biblioteca"
                        descricao="Gerenciamento de livros, autores, categorias e validações"
                        skills={["Laravel"]}
                        buttonText="Ver Projeto"
                    ></Card>
                </div>
            </section>
        </>
    )
}