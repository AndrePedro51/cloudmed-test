import { useState } from "react";
import { data } from "../../services/data";
import { Aside } from "../Aside";
import { Books } from "../Books";
import { IndexStyle } from "./styles";

export function Index(){
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(3);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = data.author.books.slice(indexOfFirstBook, indexOfLastBook);

    console.log(currentPage)
    return(
        <IndexStyle>
            <Aside /> 
            <Books booksPerPage={booksPerPage} currentBooks={currentBooks} paginate={setCurrentPage}/>
        </IndexStyle>
    )
}
