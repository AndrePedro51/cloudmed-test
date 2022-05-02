import { BookInfStyle } from "./styles";

export interface BookInfProps {
    title: string;
    year: number;
    smallDescription:string;
    category: string;
}

export function BookInf({ title, year, smallDescription, category }: BookInfProps){
    return(
        <BookInfStyle>
            <div>
                <h1>{title}</h1>
                <h1>{year}</h1>
            </div>

            <p>{smallDescription}</p>

            <p>{category}</p>

        </BookInfStyle>
        
    )
}