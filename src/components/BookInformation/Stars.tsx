import { mdiStar } from "@mdi/js";
import { mdiStarHalfFull } from '@mdi/js';
import Icon from "@mdi/react";
import { StarsStyle } from "./styles";

interface starsProps {
    starsNumber: number;
}

export function Stars({ starsNumber }: starsProps){
    let fullStars = Math.trunc(starsNumber)
    let halfStars = starsNumber % 1
    const stars = []
    for(let i = 0; i < fullStars ; i++){
        stars.push("fullStar")
    }
    if(halfStars > .5){
        stars.push("fullStar")
    } else if(halfStars > 0 && halfStars <= .5){
        stars.push("halfStar")
    }
    return(
        <StarsStyle>
            {stars.map(star => (
                star === "fullStar" ? <Icon key={star.lenght} path={mdiStar} size={1}/> : <Icon key={star} path={mdiStarHalfFull} size={1}/>
            ))}
        </StarsStyle>
    )
}