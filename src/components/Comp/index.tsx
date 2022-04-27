import { Aside } from "../Aside";
import { Books } from "../Books";
import { CompStyle } from "./styles";

export function Index(){
    return(
        <CompStyle>
            <Aside /> 
            <Books />
        </CompStyle>
    )
}