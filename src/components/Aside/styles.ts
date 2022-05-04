import styled from 'styled-components'

export const Container = styled.aside`
    position: fixed;
    height: 100%;
    width: 20vw;
    min-width: 300px;
    
    background: var(--black-700);
    z-index: 100;
    @media(max-width:1150px){
        left: -301px;
    }
    @media(max-width:320px){
        min-width: 280px;
    }

    .toggle{
        display: none;
        position: absolute;
        left: 272px;
        top: 50px;
        z-index: 10;

        min-width: 100px;
        padding: 0.8rem;

        text-align: center;
        color: var(--white-100);
        cursor: pointer;

        background: var(--black-700);
        border-radius: 0rem 0rem 0.5rem 0.5rem;

        transform: rotate(-90deg);
        @media(max-width:1150px){
            display: block;
            left: 270px;
        }
        @media(max-width:720px){
            left: 269px;
        }
        @media(max-width:320px){
            left: 249px;
        }
    }

    transition: all 0.2s;

    
`

export const HeaderStyle = styled.header`
    width: 100%;
    height: 30vh;
    background-size: cover;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const AuthorInfStyle = styled.div`
    p{
        line-height: 1.5rem;
    }
    
`

export const Content = styled.section`
    padding: 2rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--white-100);

    h1{
        padding-bottom: 1rem;
    }


    button{
        padding: .8rem 2.5rem;

        border: none;
        border-radius: 25px;
        font-weight: 700;

        background-color: var(--black-700);
        color: var(--white-100);
        border: 2px solid var(--white-100);
    }
`
export const ButtonsStyle = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    button{
        padding: .8rem 2.3rem;

        border: none;
        border-radius: 25px;
        font-weight: 700;

        :nth-child(1){
            background-color: var(--white-100);
            color: var(--black-700);
        }
        :nth-child(2){
            background-color: var(--black-700);
            color: var(--white-100);
            border: 2px solid var(--white-100);
        }
    }
`

export const SocialMediaStyle = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    svg, img{
        cursor: pointer;
        transition: all 0.2s;
        :hover{
            filter: brightness(50%);
        }
    }
`

export const StarsStyle = styled.div`
    padding: 0;
    margin: 1rem auto 0;
    text-align: center;
`