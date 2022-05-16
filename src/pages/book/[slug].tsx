import { GetServerSideProps } from "next";
import { AsideBook } from "../../components/AsideBook";
import { BookInformation } from "../../components/BookInformation";
import { data } from "../../services/data";
import { BookStyle } from "./styles";
import Head from "next/head";

interface HomeProps{
  asideBooksData: {
      slug: string;
      bookCover:string, 
      title: string, 
      year: number, 
      shortDescription: string, 
      description: [],
      rate: number,
      avaliations:number,
      stars: number,
      category: string,
  }
}

export default function Book({ asideBooksData }: HomeProps){
  return(
    <>
      <Head>
        <title>{asideBooksData.title}</title>
      </Head>
      <BookStyle>
        <AsideBook bookCover={asideBooksData.bookCover} category={asideBooksData.category} smallDescription={asideBooksData.shortDescription} title={asideBooksData.title} year={asideBooksData.year}/> 
        <BookInformation title={asideBooksData.title} description={asideBooksData.description} rate={asideBooksData.rate} avaliations={asideBooksData.avaliations} stars={asideBooksData.stars} year={asideBooksData.year}/>
      </BookStyle>
    </>
      
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params

  const response = data.author.books.find(book => book.slug == slug)

  const splitedDescription = response.description.split("<br>")

  const asideBooksData = {
      slug,
      bookCover: response.bookCover,
      title: response.title,
      year: response.year,
      shortDescription: response.shortDescription,
      description: splitedDescription,
      rate: response.rate,
      avaliations: response.avaliations,
      stars: response.rate,
      category: response.category

  }

  return {
      props:{
          asideBooksData,
      }
  }
}

