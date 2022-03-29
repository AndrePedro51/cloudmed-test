import { Container, Content } from "./styles"
import Image from 'next/image'
import logo from '../../assets/logotipo.png'

export function Header(){
    return(
        <Container>
            <Content>
                <Image src={logo}/>
            </Content>
        </Container>
        
    )
}