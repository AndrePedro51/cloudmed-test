import { GetServerSideProps } from "next";
import { AsideBook } from "../AsideBook";
import { BookInformation } from "../BookInformation";
import { CompStyle } from "./styles";
import { data } from "../../services/data"

interface IndexBookInformationProps{
    asideBooksData: {
        slug: string;
        bookCover:string, 
        title: string, 
        year: number, 
        smallDescription: string, 
        category: string,
    }
}

export function IndexBookInformation({ asideBooksData }: IndexBookInformationProps){
    return(
        <CompStyle>
            <AsideBook bookCover={asideBooksData.bookCover} category={asideBooksData.category} smallDescription={asideBooksData.smallDescription} title={asideBooksData.title} year={asideBooksData.year}/> 
            <BookInformation />
        </CompStyle>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const { slug } = params

    const response = data.author.books.find(book => book.slug == slug)

    const asideBooksData = {
        slug,
        bookCover: response.bookCover,
        title: response.title,
        year: response.year,
        smallDescription: response.description,
        category: response.category

    }

    return {
        props:{
            asideBooksData,
        }
    }
}