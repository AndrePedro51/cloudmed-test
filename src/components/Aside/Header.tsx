import { HeaderStyle } from "./styles";

import { data } from "../../services/data"

export function Header(){
    const image = data.author.authorImg
    return(
        <HeaderStyle>
            <img src={image} alt="gaiman" />
        </HeaderStyle>
    )
    
}