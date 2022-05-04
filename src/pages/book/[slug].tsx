import { GetServerSideProps } from "next";
import { AsideBook } from "../../components/AsideBook";
import { BookInformation } from "../../components/BookInformation";
import { data } from "../../services/data";
import { BookStyle } from "./styles";

interface HomeProps{
  asideBooksData: {
      slug: string;
      bookCover:string, 
      title: string, 
      year: number, 
      shortDescription: string, 
      category: string,
  }
}

export default function Book({ asideBooksData }: HomeProps){
  return(
    <>
      <BookStyle>
        <AsideBook bookCover={asideBooksData.bookCover} category={asideBooksData.category} smallDescription={asideBooksData.shortDescription} title={asideBooksData.title} year={asideBooksData.year}/> 
        <BookInformation />
      </BookStyle>
    </>
      
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params

  const response = data.author.books.find(book => book.slug == slug)

  const asideBooksData = {
      slug,
      bookCover: response.bookCover,
      title: response.title,
      year: response.year,
      shortDescription: response.shortDescription,
      category: response.category

  }

  return {
      props:{
          asideBooksData,
      }
  }
}

