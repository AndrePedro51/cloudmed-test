import { mdiTwitter, mdiFacebook, mdiInstagram, mdiYoutube, mdiPinterest} from '@mdi/js';
import dribble from "../../img/dribbble.png"
import Icon from '@mdi/react';
import Image from "next/image";
import { SocialMediaStyle } from './styles';

export function SocialMedias(){
    return(
        <SocialMediaStyle>
            <Icon path={mdiTwitter} size={1}/>
            <Icon path={mdiFacebook} size={1}/>
            <Icon path={mdiInstagram} size={1}/>
            <Icon path={mdiYoutube} size={1}/>
            <Icon path={mdiPinterest} size={1}/>
            <Image src={dribble} alt="dribble" width={"23px"} height={"20px"}/>
        </SocialMediaStyle>
    )
}