import { styled } from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 20px;
    padding:  ${({theme}) => theme.space.base(3.5)};
    background-color: rgba(200, 200, 200, 0.662);
    box-shadow: 0px 0px 2px 2px rgba(200, 200, 200, 0.662);
    transition:0.3s ease-in-out;
`