import { ContainerHeader, ContentHeader } from "./styles"
import Image from 'next/image'
import logo from '../../assets/logotipo.png'

export function Header(){
    return(
        <ContainerHeader>
            <ContentHeader>
                <Image src={logo} alt="logo"/>
            </ContentHeader>
        </ContainerHeader>
        
    )
}