import Image from "next/image";
import gaiman from "../../assets/gaiman-b9 1.png"
import { Buttons } from "./Button";
import { Content, Container} from "./styles";
import { mdiStar } from '@mdi/js';
import Icon from '@mdi/react'
import { SocialMedias } from "./SocialMedia";
import { Stars } from "./Stars";
import { Header } from "./Header";
import { AuthorInf } from "./AuthorInf";

export function Aside(){
    return(
        <Container>
            <Header />
            <Content>
                <Stars />
                <AuthorInf />
                <Buttons />
                <SocialMedias />
                <button>MINHA LISTA</button>
            </Content>
        </Container>
        
    )
}