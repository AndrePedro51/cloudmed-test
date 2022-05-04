import { Aside } from "../Aside";
import { Books } from "../Books";
import { IndexStyle } from "./styles";

export function Index(){
    return(
        <IndexStyle>
            <Aside /> 
            <Books />
        </IndexStyle>
    )
}