import { BooksStyle, Container, Content } from "./styles"
import { Header } from "./Header"
import { Book } from "./Book"
import { Pagination } from "../Pagination"

import { data } from "../../services/data"

export function Books(){
    return (
        <BooksStyle>
            <Header />
            <Container>
                <h1>TODAS AS OBRAS</h1>
                <Content>
                    {data.author.books.map(book => (
                        <Book key={book.id} slug={book.slug} bookCover={book.bookCover} title={book.title} year={book.year}/>
                    ))}
                </Content>
                <Pagination />
                
            </Container>
        </BooksStyle>
        
        
    )
}