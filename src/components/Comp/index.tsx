import { Aside } from "../Aside";
import { Books } from "../Books";
import { CompStyle } from "./styles";

export function Comp(){
    return(
        <CompStyle>
            <Aside /> 
            <Books />
        </CompStyle>
    )
}