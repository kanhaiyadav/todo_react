import styled from "styled-components";

export const Label = styled.label`
    z-index: -1;
    padding: 2px 10px;
    position: absolute;
    font-size: 1.1rem;
    color: rgb(0, 0, 0);
    transition: 0.3s ease-in-out;
    top:50%;
    left: 5%;
    transform: translateY(-50%);
`

export const Input = styled.input`
    width: 100%;
        z-index: 100;
        font-size: 1.1rem;
        font-family: Open Sans, sans-serif;
        background-color: rgba(182, 182, 182, 0.412);
        outline:none;
        border:1px solid rgb(110, 110, 110);
        border-radius: 10px;
        padding: 12px;
        &:focus + ${Label}{
            z-index: 1;
            top: -3px;
            font-size: 0.9rem;
            color: white;
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius: 5px;
        }
        &:focus{
            border: 1px solid ${({ theme }) => theme.colors.primary};
            background-color: ${({ theme }) => theme.colors.secondary};
        }
`

export const InputContainer = styled.div`
    width: 100%;
    position: relative;
`


