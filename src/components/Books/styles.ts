import styled from 'styled-components';

export const BooksStyle = styled.section`
    display: block;
    margin: 0 0 0 auto;
    padding-right: 2.5rem;
`
export const Container = styled.main`
    width: 78vw;
    padding: 1rem;

    h1{
        padding-bottom: 2rem;
        font-size: 2rem;
    }

    @media(max-width:1750px){
        width:75vw;
    }
    @media(max-width:1500px){
        width:70vw;
    }
    @media(max-width:1300px){
        width:60vw;
    }
    @media(max-width:980px){
        width:40vw;
    }
`

export const Content = styled.section`
    display: flex;
    flex-wrap: wrap;

    .book{
        width: 10vw;
        min-width: 200px;
        padding: 1rem 3rem 2rem 0rem;
        cursor: pointer;
        
        p{
            text-align: center;
            font-weight: 700;

            :nth-child(3){
                font-weight: 400;
            }
        }
        @media(max-width:1300px){
            width: 8vw;
            min-width: 180px;
            margin: 0 auto;
        }

        img{
            transition: transform .2s;
        }

        :hover{
            img{
                transform: scale(1.1);
            }
        }
    }

`

export const ContainerHeader = styled.header`
    max-width: 75vw;
    display: flex;
    justify-content: flex-start; 
    padding: 1rem;
    padding-bottom: 0;
`

export const ContentHeader = styled.div`
    max-width: 12.5rem;

`