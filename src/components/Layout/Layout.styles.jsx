import styled from 'styled-components';

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