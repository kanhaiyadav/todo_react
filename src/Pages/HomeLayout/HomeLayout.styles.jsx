import styled from "styled-components";

export const HomeLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space.base(4)};
    height: 95vh;
    main{
        a.active {
        filter: drop-shadow(2px 2px 3px black);
        background-color: ${({ theme }) => theme.colors.primary};
    }}

`

export const Loader = styled.div`
    width: 100%;
    position: absolute;
    background-color: white;
    top:0px;
    left:0px;
    right:0px;
`