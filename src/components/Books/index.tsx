import { BooksStyle, Container, Content } from "./styles"
import neveVidroMacas from '../../assets/neve vidro e maçãs - 2019.png'
import mitologiaNordica from '../../assets/mitologia nordica  - 2017.png'
import criaturasEstranhas from '../../assets/Criaturas estranhas - 2013.png'
import fumacaEspelhos from '../../assets/Fumaça e espelhos - 1999.png'
import fimDosMundos from '../../assets/Sandman - Fim dos Mundos 1994.png'
import lugarNenhum from '../../assets/Lugar nenhum - 1996.png'
import livroDoCemiterio from '../../assets/o livro do cemitério - 2008.png'
import versaoDefinitiva from '../../assets/Sandman Versão Definitiva (volume 1) - 2006.png'
import coraline from '../../assets/Coraline - 2002.png'
import { Header } from "./Header"
import { Book } from "./Book"
import { Pagination } from "../Pagination"

export function Books(){
    return (
        <BooksStyle>
            <Header />
            <Container>
                <h1>TODAS AS OBRAS</h1>
                <Content>
                    <Book src={neveVidroMacas} description="NEVE VIDRO E MAÇÃS" year={2019}/>
                    <Book src={mitologiaNordica} description="MITOLOGIA NÓRDICA" year={2017}/>
                    <Book src={criaturasEstranhas} description="CRIATURAS ESTRANHAS" year={2013}/>
                    <Book src={fumacaEspelhos} description="FUMAÇA E ESPELHOS" year={1998}/>
                    <Book src={fimDosMundos} description="SANDMAN - FIM DOS MUNDOS" year={1994}/>
                    <Book src={lugarNenhum} description="LUGAR NENHUM" year={1996}/>
                    <Book src={livroDoCemiterio} description="LIVRO DO CEMITÉRIO" year={2008}/>
                    <Book src={versaoDefinitiva} description="SANDMAN - VERSÃO DEFINITIVA (VOL 1)" year={2006}/>
                    <Book src={coraline} description="CORALINE" year={2002}/>
                </Content>
                <Pagination />
                
            </Container>
        </BooksStyle>
        
        
    )
}