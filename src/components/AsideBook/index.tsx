import { Content, Container} from "./styles";
import { Header } from "./Header";
import { BookInf, BookInfProps } from "./BookInf";
import { useState } from "react";

interface AsideBookProps extends BookInfProps{
    bookCover: string;
}

export function AsideBook({ bookCover, title, year, smallDescription, category}: AsideBookProps){
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
            <Header bookCover={bookCover}/>
            <Content>
                <BookInf title={title} year={year} smallDescription={smallDescription} category={category}/>
                <button>ADICIONAR À MINHA LISTA</button>
            </Content>
            <div className="toggle" onClick={handleMenuClass}> Inf. livro</div>
        </Container>
        
    )
}