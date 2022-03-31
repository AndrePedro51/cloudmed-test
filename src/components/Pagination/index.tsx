import {mdiChevronLeft, mdiChevronRightCircle  } from "@mdi/js";
import Icon from "@mdi/react";
import { PaginationStyle } from "./style";

export function Pagination(){
    return(
        <PaginationStyle>
            <Icon path={mdiChevronLeft} size={2} color="black"/>
            <a href="#">01</a>
            <a></a>
            <a href="#">02</a>
            <a href="#">03</a>
            <a href="#">04</a>
            <a href="#">05</a>
            <a>...</a>
            <a href="#">10</a>
            <Icon path={mdiChevronRightCircle} size={2} color="black"/>
        </PaginationStyle>
    )
}