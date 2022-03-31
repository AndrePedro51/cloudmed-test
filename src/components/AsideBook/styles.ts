import styled from 'styled-components'

export const Container = styled.aside`
    display: block;
    position: fixed;
    height: 100vh;
    width: 350px;
    
    background: var(--black-700);
    header{
        width: 100%;
        height: 47vh;
    }
`

export const HeaderStyle = styled.header`
    width: 100%;
`
export const BookInfStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
        line-height: 1.5rem;
        :nth-child(3){
            font-weight: 700;
        }
    }
`

export const Content = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--white-100);


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
        padding: .8rem 2.5rem;

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
`

export const StarsStyle = styled.div`
    margin: 0 auto;
    text-align: center;
`