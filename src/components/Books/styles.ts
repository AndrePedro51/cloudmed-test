import styled from 'styled-components';

export const BooksStyle = styled.section`
    display: block;
    margin: 0 0 0 auto;
    padding-right: 2.5rem;
`
export const Container = styled.main`
    max-width: 75vw;
    padding: 1rem;

    h1{
        padding-bottom: 2rem;
        font-size: 2rem;
    }
`

export const Content = styled.section`
    display: flex;
    flex-wrap: wrap;

    .book{
        width: 12vw;
        min-width: 200px;
        padding: 1rem 3rem 2rem 0rem;
        p{
            text-align: center;
            font-weight: 700;

            :nth-child(3){
                font-weight: 400;
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