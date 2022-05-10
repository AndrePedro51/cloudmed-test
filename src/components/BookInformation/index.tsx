import { BooksStyle, Container, Content } from "./styles"
import { Header } from "./Header"
import { Stars } from "./Stars"

interface bookInformationProps {
    title: string;
    rate: string;
    avaliations: string;
    description: string;
    stars: number;
}

export function BookInformation({ title, rate, avaliations, description, stars }:bookInformationProps){
    return (
        <BooksStyle>
            <Header />
            <Container>
                <h1>{title}</h1>
                <Content>
                    <section className="avaliation">
                        <h1>{2.5}</h1>
                        <div>
                            <Stars starsNumber={stars}/>
                            <p>
                                {avaliations} avaliações
                            </p>
                        </div>
                    </section>
                    <section className="resenha">
                        <h1>Resenha</h1>
                        <p>{description}</p>
                    </section>
                </Content>
                
            </Container>
        </BooksStyle>
        
        
    )
}