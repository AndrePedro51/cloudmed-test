import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import { StarsStyle } from "./styles";

export function Stars(){
    return(
        <StarsStyle>
            <Icon path={mdiStar} size={1}/>
            <Icon path={mdiStar} size={1}/>
            <Icon path={mdiStar} size={1}/>
            <Icon path={mdiStar} size={1}/>
            <Icon path={mdiStar} size={1}/>
        </StarsStyle>
    )
}