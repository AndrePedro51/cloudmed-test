import { BooksStyle, Container, Content } from "./styles"
import { Header } from "./Header"
import { Book } from "./Book"
import { Pagination } from "../Pagination"

import { data } from "../../services/data"

export function Books({ booksPerPage, currentBooks, paginate }){

    return (
        <BooksStyle>
            <Header />
            <Container>
                <h1>TODAS AS OBRAS</h1>
                <Content>
                    {currentBooks.map(book => (
                        <Book key={book.id} slug={book.slug} bookCover={book.bookCover} title={book.title} year={book.year}/>
                    ))}
                </Content>
                <Pagination booksPerPage={booksPerPage} totalBooks={data.author.books.length} paginate={paginate} />
                
            </Container>
        </BooksStyle>
        
        
    )
}