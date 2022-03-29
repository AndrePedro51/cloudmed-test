import Image from "next/image";
import gaiman from "../../assets/gaiman-b9 1.png"
import star from '../../assets/star.svg';

export function Aside(){
    return(
        <>
            <Image src={gaiman}/>
            <Image src={star}/>
        </>
        
    )
}