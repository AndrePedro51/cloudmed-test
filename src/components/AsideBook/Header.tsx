import Image from "next/image";
import fumacaEspelhos from "../../assets/Fumaça e espelhos - 1999.png"
import { HeaderStyle } from "./styles";

export function Header(){
    return(
        <HeaderStyle>
            <Image src={fumacaEspelhos} alt="Fumaça e espelhos" objectFit="fill" height={500} width={400} objectPosition="center"/>
        </HeaderStyle>
    )
    
}