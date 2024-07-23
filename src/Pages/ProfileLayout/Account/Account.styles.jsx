import styled from "styled-components";


export const PageContainer = styled.div`
    color: ${({ theme }) => theme.colors.textColor};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space.base(4)};
`