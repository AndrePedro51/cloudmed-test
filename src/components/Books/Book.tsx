import Image, { ImageProps } from 'next/image'
import Link from 'next/link';


interface bookProps extends ImageProps{
    description: string;
    year: number;
}

export function Book({ src, description, year }: bookProps){
    return(
        <div className='book'>
            <Link href="/fumaca-e-espelhos" passHref>
                <Image src={src} alt="livro"/>
            </Link>
            <p>{description}</p>
            <p>{year}</p>
        </div>
    )
    
}