import styled from 'styled-components';

export const BooksStyle = styled.section`
    display: block;
    margin: 0 0 0 auto;
    padding-right: 2.5rem;
    
    @media(max-width:1750px){
        main{
            width:70vw;
        }
    }

    @media(max-width:1150px){
        padding-right: 0;
        main{
            width:100vw;
            h1{
                text-align: center;
            }
        }

        section{
            justify-content: center;
        }

        header{
            max-width: 100%;
            justify-content: center;
        }
    }

    
    
`
export const Container = styled.main`
    width: 75vw;
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
        width: 10vw;
        min-width: 200px;
        padding: 1rem;
        cursor: pointer;
        
        p{
            text-align: center;
            font-weight: 700;

            :nth-child(3){
                font-weight: 400;
            }
        }
        

        img{
            transition: transform .2s;
            margin: 0 auto;
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