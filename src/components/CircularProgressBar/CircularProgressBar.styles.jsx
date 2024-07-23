import styled from "styled-components";

export const ProgressBar = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.radii.circle};
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: ${({ theme }) => theme.colors.textColor};
        z-index: 100;
        font-size: ${({ theme }) => theme.fontSizes.xxxl};
    }
    &::before{
        content: "";
        position: absolute;
        width: 84%;
        height: 84%;
        background-color: ${({ theme }) => theme.colors.pbarColor};;
        box-shadow: inset 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
        border-radius: ${({ theme }) => theme.radii.circle};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`


export const BarContainer = styled.div`
    width: 130px;
    height: 130px;
    position: relative;
`