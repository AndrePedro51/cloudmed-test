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

    section.avaliation{
        display: flex;
        align-items: center;
        gap: 1.5rem;
        h1{
            padding: 1rem;
            width: 5rem;
            border-radius: .8rem;
            text-align: center;
            color: var(--white-100);
            background-color: var(--green-500);
        }
        p{
            font-weight: 700;
            padding-top: .2rem;
        }
    }

    section.resenha{
        h1{
            padding-top: 2rem;
            padding-bottom: 0;
        }
        p{
            padding: 1rem 0;
        }
    }

`

export const ContainerHeader = styled.header`
    max-width: 75vw;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    padding-bottom: 0;

    svg{
        cursor: pointer;
    }
`

export const ContentHeader = styled.div`
    max-width: 12.5rem;
    
`

export const StarsStyle = styled.div`
    margin: 0 auto;
    text-align: center;
    display: flex;
    gap: .5rem;
`