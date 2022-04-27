import { ContainerHeader, ContentHeader } from "./styles"
import Image from 'next/image'
import logo from '../../img/logotipo.png'
import { mdiArrowLeftCircle } from '@mdi/js';
import Icon from "@mdi/react";
import Link from "next/link";

export function Header(){
    return(
        <ContainerHeader>
            <Link href="/" passHref>
                <Icon path={mdiArrowLeftCircle} size={1.9} color="black"/>
            </Link>
            <ContentHeader>
                <Image src={logo} alt="logo"/>
            </ContentHeader>
        </ContainerHeader>
        
    )
}