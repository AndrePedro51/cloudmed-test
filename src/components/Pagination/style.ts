import styled from "styled-components";

export const PaginationStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
        color: var(--black-500);
        font-weight: 500;
        padding: .3rem;

        :nth-child(3){
            border: 1px solid black;
            padding: 0;
            width: 2rem;
        }
        :nth-child(2){
            font-weight: 700;
        }
    }
    svg{
        cursor: pointer;
    }

`