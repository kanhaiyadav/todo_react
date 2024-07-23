import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid green;
    border-radius: 5px;
    width: 45%;
    margin: 10px 0px;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
    input{
        flex: 1 1 auto;
        background: transparent;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 1.2rem;
    }
    button{
        background-color: green;
        color: white;
        border: none;
        outline: none;
        padding: 10px 15px;
        font-size: 1.2rem;
        &:hover{
            background-color: darkgreen;
        }
    }
`