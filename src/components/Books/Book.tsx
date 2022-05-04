import Link from 'next/link';


interface bookProps{
    title: string;
    year: number;
    slug: string;
    bookCover: string;
}

export function Book({bookCover, title, year, slug }: bookProps){
    return(
        <div className='book'>
            <Link href={`/book/${slug}`} passHref>
                <img src={bookCover} alt="livro"/>
            </Link>
            <p>{title}</p>
            <p>{year}</p>
        </div>
    )
    
}