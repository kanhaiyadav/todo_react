import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid green;
    border-radius: ${({ theme }) => theme.radii.sm};
    width: 45%;
    margin: ${({ theme }) => theme.space.base(2)} 0px;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
    input{
        color: ${({ theme }) => theme.colors.textColor};
        flex: 1 1 auto;
        background: transparent;
        border: none;
        outline: none;
        padding: ${({ theme }) => theme.space.base(2)};
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
    button{
        background-color: green;
        color: white;
        border: none;
        outline: none;
        padding: ${({ theme }) => theme.space.base(2)} ${({ theme }) => theme.space.base(3)};
        font-size: ${({ theme }) => theme.fontSizes.xxl};
        &:hover{
            background-color: darkgreen;
        }
    }
`