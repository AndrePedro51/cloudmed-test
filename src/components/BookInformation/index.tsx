import { BooksStyle, Container, Content } from "./styles"
import { Header } from "./Header"
import { Stars } from "./Stars"

interface bookInformationProps {
    title: string;
    rate: number;
    avaliations: number;
    description: [];
    stars: number;
    year:number;
}

export function BookInformation({ title, rate, avaliations, description, stars, year }:bookInformationProps){
    return (
        <BooksStyle>
            <Header />
            <Container>
                <h1>{title} - {year}</h1>
                <Content>
                    <section className="avaliation">
                        <h1>{rate}</h1>
                        <div>
                            <Stars starsNumber={stars}/>
                            <p>
                                {avaliations} avaliações
                            </p>
                        </div>
                    </section>
                    <section className="resenha">
                        <h1>Resenha</h1>
                        {description.map(desc => (
                            <p key={desc}>{desc}</p>
                        ))}
                    </section>
                </Content>
                
            </Container>
        </BooksStyle>
        
        
    )
}