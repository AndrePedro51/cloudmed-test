import Image from "next/image";
import gaiman from "../../assets/gaiman-b9 1.png"
import { HeaderStyle } from "./styles";

export function Header(){
    return(
        <HeaderStyle>
            <Image src={gaiman} alt="Neil Gaiman" width={400} height={300} objectFit="cover" objectPosition="center"/>
        </HeaderStyle>
    )
    
}