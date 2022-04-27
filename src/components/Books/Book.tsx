import Image, { ImageProps } from 'next/image'
import Link from 'next/link';


interface bookProps extends ImageProps{
    key: number;
    title: string;
    year: number;
}

export function Book({key, src, title, year }: bookProps){
    return(
        <div key={key} className='book'>
            <Link href="/fumaca-e-espelhos" passHref>
                <Image src={src} alt="livro"/>
            </Link>
            <p>{title}</p>
            <p>{year}</p>
        </div>
    )
    
}