import styled from "styled-components";

export const TaskDirectoryContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    overflow-x: hidden;
    padding-top: ${({ theme }) => theme.space.base(2)};
    &:hover {
        overflow: auto;
    }
`