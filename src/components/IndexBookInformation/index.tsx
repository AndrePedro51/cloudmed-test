import { GetServerSideProps } from "next";
import { AsideBook } from "../AsideBook";
import { BookInformation } from "../BookInformation";
import { CompStyle } from "./styles";
import { data } from "../../services/data"

interface IndexBookInformationProps{
    indexBooksData: {
        slug: string;
        bookCover:string, 
        title: string, 
        year: number, 
        smallDescription: string, 
        description: string,
        rate: string,
        avaliations: number;
        stars: number;
        category: string,
    }
}

export function IndexBookInformation({ indexBooksData }: IndexBookInformationProps){
    return(
        <CompStyle>
            <AsideBook bookCover={indexBooksData.bookCover} category={indexBooksData.category} smallDescription={indexBooksData.smallDescription} title={indexBooksData.title} year={indexBooksData.year}/> 
            <BookInformation title="asdf" rate={"4.5"} avaliations={"1245"} description="aaaaa" stars={indexBooksData.stars}/>
        </CompStyle>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params

    const response = data.author.books.find(book => book.slug == slug)

    const indexBooksData = {
        slug,
        bookCover: response.bookCover,
        title: response.title,
        year: response.year,
        smallDescription: response.shortDescription,
        description: response.description,
        rate: response.rate,
        avaliations: response.avaliations,
        stars: response.stars,
        category: response.category,

    }

    return {
        props:{
            indexBooksData,
        }
    }
}