import { Content, Container} from "./styles";
import { Header } from "./Header";
import { BookInf } from "./BookInf";
import { useState } from "react";

export function AsideBook(){
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
                <BookInf />
                <button>ADICIONAR À MINHA LISTA</button>
            </Content>
            <div className="toggle" onClick={handleMenuClass}> Inf. livro</div>
        </Container>
        
    )
}