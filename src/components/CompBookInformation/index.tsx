import { AsideBook } from "../AsideBook";
import { BookInformation } from "../BookInformation";
import { CompStyle } from "./styles";

export function IndexBookInformation(){
    return(
        <CompStyle>
            <AsideBook /> 
            <BookInformation />
        </CompStyle>
    )
}