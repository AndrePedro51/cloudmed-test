import { HeaderStyle } from "./styles";

export function Header(){
    const image = "/images/Fumaça e espelhos - 1999.png"
    return(
        <HeaderStyle>
            <img src={image} alt="Fumaça e espelhos" />
        </HeaderStyle>
    )
    
}