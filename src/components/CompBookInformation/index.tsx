import { AsideBook } from "../AsideBook";
import { BookInformation } from "../BookInformation";
import { CompStyle } from "./styles";

export function CompBookInformation(){
    return(
        <CompStyle>
            <AsideBook /> 
            <BookInformation />
        </CompStyle>
    )
}