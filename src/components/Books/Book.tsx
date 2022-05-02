import Image, { ImageProps } from 'next/image'
import Link from 'next/link';


interface bookProps extends ImageProps{
    key: number;
    title: string;
    year: number;
    slug: string;
}

export function Book({key, src, title, year, slug }: bookProps){
    return(
        <div key={key} className='book'>
            <Link href={`book/${slug}`} passHref>
                <Image src={src} alt="livro"/>
            </Link>
            <p>{title}</p>
            <p>{year}</p>
        </div>
    )
    
}