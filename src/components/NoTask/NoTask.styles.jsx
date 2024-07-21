import styled from "styled-components";

export const NoTaskContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 40%;
        object-fit: contain;
        filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
    }
    p{
        font-size: 1.1rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        &.motivation{
            font-size: 1.3rem;
        }
    }
`