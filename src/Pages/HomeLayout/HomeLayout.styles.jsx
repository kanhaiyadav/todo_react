import styled from "styled-components";

export const ThemeButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: ${({ theme }) => theme.radii.circle};
    background-color: ${({ $sun }) => !$sun ? "yellow" : "#1b0454"};
    color: ${({ $sun }) => !$sun ? "tomato" : "white"};
    border: 1px solid ${({ $sun }) => !$sun ? "tomato" : "white"};
`

export const HomeLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space.base(4)};
    height: 95vh;
    main{
        a.active {
        filter: drop-shadow(2px 2px 3px #414141);
        background-color: ${({ theme }) => theme.colors.primary};
    }
    }

`

export const Loader = styled.div`
    width: 100%;
    position: absolute;
    background-color: white;
    top:0px;
    left:0px;
    right:0px;
`