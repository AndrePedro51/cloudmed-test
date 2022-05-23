import {mdiChevronLeft, mdiChevronRightCircle  } from "@mdi/js";
import Icon from "@mdi/react";
import { PaginationStyle } from "./style";

interface PaginationProps {
    booksPerPage: number;
    totalBooks: number;
    paginate:(page: number) => void;
}

export function Pagination({ booksPerPage, totalBooks, paginate }: PaginationProps){
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <PaginationStyle>
            <Icon path={mdiChevronLeft} size={2} color="black"/>
            {pageNumbers.map(number => (
                <p onClick={() => paginate(number)} key={number} >{number}</p>
            ))}
            <Icon path={mdiChevronRightCircle} size={2} color="black"/>
        </PaginationStyle>
    )
}