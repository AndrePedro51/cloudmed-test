import { Content, Container} from "./styles";
import { Header } from "./Header";
import { BookInf } from "./BookInf";

export function AsideBook(){
    return(
        <Container>
            <Header />
            <Content>
                <BookInf />
                <button>ADICIONAR À MINHA LISTA</button>
            </Content>
        </Container>
        
    )
}