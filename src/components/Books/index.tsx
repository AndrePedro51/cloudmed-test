import { Container, Content } from "./styles"
import Image from 'next/image'
import neveVidroMacas from '../../assets/neve vidro e maçãs - 2019.png'
import mitologiaNordica from '../../assets/mitologia nordica  - 2017.png'
import criaturasEstranhas from '../../assets/Criaturas estranhas - 2013.png'
import fumacaEspelhos from '../../assets/Fumaça e espelhos - 1999.png'
import fimDosMundos from '../../assets/Sandman - Fim dos Mundos 1994.png'
import lugarNenhum from '../../assets/Lugar nenhum - 1996.png'
import livroDoCemiterio from '../../assets/o livro do cemitério - 2008.png'
import versaoDefinitiva from '../../assets/Sandman Versão Definitiva (volume 1) - 2006.png'
import coraline from '../../assets/Coraline - 2002.png'

export function Books(){
    return (
        <Container>
            <h1>TODAS AS OBRAS</h1>
            <Content>
                <Image src={neveVidroMacas}/>
                <Image src={mitologiaNordica}/>
                <Image src={criaturasEstranhas}/>
                <Image src={fumacaEspelhos}/>
                <Image src={fimDosMundos}/>
                <Image src={lugarNenhum}/>
                <Image src={livroDoCemiterio}/>
                <Image src={versaoDefinitiva}/>
                <Image src={coraline}/>
            </Content>
            
        </Container>
        
    )
}