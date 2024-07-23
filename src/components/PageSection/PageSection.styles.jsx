import styled from "styled-components";

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.textColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
    width: 100%;
    padding: ${({ theme }) => theme.space.xs} 0px;
`

export const PageSectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.space.base(2)};
    gap: ${({ theme }) => theme.space.base(2)};
`