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
import { useState } from "react";


export function Aside(){
    const [menuClass, setMenuClass] = useState('hideMenu')
    function handleMenuClass(){
        if (menuClass === 'hideMenu' || menuClass === ''){
            setMenuClass('showMenu')
        } else {
            setMenuClass('hideMenu')
        }
    }
    return(
        <Container className={menuClass}>
            <Header />
            <Content>
                <Stars />
                <AuthorInf />
                <Buttons />
                <SocialMedias />
                <button>MINHA LISTA</button>
            </Content>
            <div className="toggle" onClick={handleMenuClass}> Inf. autor</div>
        </Container>
        
    )
}