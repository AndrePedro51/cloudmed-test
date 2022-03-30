import styled from 'styled-components';

export const BooksStyle = styled.section`
    display: block;
    margin: 0 0 0 auto;
`
export const Container = styled.main`
    max-width: 75vw;
    padding: 2rem;

    h1{
        padding-bottom: 2rem;
    }
`

export const Content = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2.5rem;

`

export const ContainerHeader = styled.header`
    max-width: 75vw;
    display: flex;
    justify-content: flex-start; 
    padding: 2rem;
    padding-bottom: 0;
`

export const ContentHeader = styled.div`
    max-width: 12.5rem;

`