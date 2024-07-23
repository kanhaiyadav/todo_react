import { styled } from "styled-components";

export const ItemsContainer = styled.div`
    list-style: none;
    margin:${({ theme }) => theme.space.base(2)} 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
`