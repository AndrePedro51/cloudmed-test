import Image, { ImageProps } from 'next/image'

interface bookProps{
    description: string;
    year: number;
}

export function Book({ src }: ImageProps, { description, year }: bookProps){
    return(
        <div>
            <Image src={src} alt="livro"/>
            <p>{description}</p>
            <p>{year}</p>
        </div>
    )
    
}