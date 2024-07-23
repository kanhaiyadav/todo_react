import styled from "styled-components";

export const Form = styled.form`
    width: 94%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${({ theme }) => theme.space.base(4)};
    align-items: center;
    div.buttons{
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: ${({ theme }) => theme.space.base(4)};
    }
`