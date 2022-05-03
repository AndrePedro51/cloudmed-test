import Link from 'next/link';


interface bookProps{
    key: number;
    title: string;
    year: number;
    slug: string;
    bookCover: string;
}

export function Book({key, bookCover, title, year, slug }: bookProps){
    return(
        <div key={key} className='book'>
            <Link href={`book/${slug}`} passHref>
                <img src={bookCover} alt="livro"/>
            </Link>
            <p>{title}</p>
            <p>{year}</p>
        </div>
    )
    
}