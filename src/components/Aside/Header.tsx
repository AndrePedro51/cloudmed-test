import { HeaderStyle } from "./styles";

export function Header(){
    const image = "/images/gaiman.png"
    return(
        <HeaderStyle>
            <img src={image} alt="gaiman" />
        </HeaderStyle>
    )
    
}