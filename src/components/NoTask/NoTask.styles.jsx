import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const NoTaskContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    ${flexCenter};
    img{
        width: 40%;
        object-fit: contain;
        filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
    }
    p{
        color: ${({ theme }) => theme.colors.textColor};
        font-size: 1.1rem;
        font-family: ${({ theme }) => theme.fontFamily.primary};
        &.motivation{
            font-size: 1.3rem;
        }
    }
`