import Image, { ImageProps } from 'next/image'


interface bookProps extends ImageProps{
    description: string;
    year: number;
}

export function Book({ src, description, year }: bookProps){
    return(
        <div className='book'>
            <Image src={src} alt="livro"/>
            <p>{description}</p>
            <p>{year}</p>
        </div>
    )
    
}