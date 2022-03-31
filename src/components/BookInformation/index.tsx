import { BooksStyle, Container, Content } from "./styles"
import { Header } from "./Header"
import { Stars } from "./Stars"

export function BookInformation(){
    return (
        <BooksStyle>
            <Header />
            <Container>
                <h1>FUMAÇA E ESPELHOS - 1998</h1>
                <Content>
                    <section className="avaliation">
                        <h1>4.2</h1>
                        <div>
                            <Stars />
                            <p>
                                1500 avaliações
                            </p>
                        </div>
                    </section>
                    <section className="resenha">
                        <h1>Resenha</h1>
                        <p>Dos 31 contos (e poesias) que compõem Fumaça e espelhos, são poucos os que não surpreendem de cara pelas ideias. E os que não chamam atenção nas primeiras linhas geram várias surpresas posteriores, pois você nunca sabe se aquele jovem pacato é um lobisomem ou se o heróico narrador do conto é um assassino. Ou mesmo o assassinado.</p>
                        <p> Fumaça e espelhos é uma coletânea de textos que Neil Gaiman escreveu nas décadas de 80 e 90. Na categoria de escritor ficcionista profissional, ele teve contos encomendados e publicados por diversas revistas e coletâneas, o que logo se nota pela diversidade de temas. Há desde a sua conhecida predileção por terror fantástico e magia até um conto erótico. Um elemento, porém, une todos os textos: seu vinculo com a tradição.</p>
                    </section>
                </Content>
                
            </Container>
        </BooksStyle>
        
        
    )
}