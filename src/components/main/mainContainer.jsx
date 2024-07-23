import { styled } from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: ${({ theme }) => theme.radii.xl};
    padding:  ${({theme}) => theme.space.base(3.5)};
    background-color: ${({ theme }) => theme.mainDiv.color};
    box-shadow: ${({ theme }) => theme.mainDiv.shadow};
    transition:0.3s ease-in-out;
`