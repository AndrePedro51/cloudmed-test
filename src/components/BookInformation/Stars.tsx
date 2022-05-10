import { mdiStar } from "@mdi/js";
import { mdiStarHalfFull } from '@mdi/js';
import Icon from "@mdi/react";
import { StarsStyle } from "./styles";

interface starsProps {
    starsNumber: number;
}

export function Stars({ starsNumber }: starsProps){
    const stars = []
    for(let i = 0; i < starsNumber; i++){
        stars.push(i)
    }
    return(
        <StarsStyle>
            {stars.map(star => (
                <Icon key={star} path={mdiStar} size={1}/>
            ))}
        </StarsStyle>
    )
}