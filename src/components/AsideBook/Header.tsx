import { HeaderStyle } from "./styles";

interface HeaderProps{
    bookCover: string;
}

export function Header({ bookCover }:HeaderProps){
    const image = bookCover
    return(
        <HeaderStyle>
            <img src={image} alt="Fumaça e espelhos" />
        </HeaderStyle>
    )
    
}