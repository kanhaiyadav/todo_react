import { styled, css } from "styled-components";
import { flexCenter } from "../../styles/mixins";

const dueStyles = css`
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const importantStyles = css`
    border: 2px solid ${({ theme }) => theme.colors.impColor};
    background-color: ${({ theme }) => theme.colors.impColor};
`;

const lateStyles = css`
    border: 2px solid red;
    background: linear-gradient(#ff000063, ${({ theme }) => theme.colors.secondary});
    `   

const getTaskStyles = ({ $important, $late }) => {
    if ($late) return lateStyles;
    if ($important) return importantStyles;
    else return dueStyles
}

export const CheckboxContainer = styled.div`
    justify-self: center;
    ${flexCenter};
    height: 20px;
    z-index: 123400000;
`

export const DeleteTaskButton = styled.div`
    ${flexCenter};
    border-radius: ${({ theme }) => theme.radii.circle};
    background-color:${({ theme }) => theme.colors.textColor === 'white' ? 'black' : 'white'};
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 1000;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    visibility: hidden;
    i{
        color: ${({ theme }) => theme.colors.textColor};
        &:hover{
            color: red;
        }
    }
`

export const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 0.95fr 0.05fr;
    p{
        padding: 0px ${({ theme }) => theme.space.base(2)};
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: ${({ $checkbox_clicked, $due }) => $checkbox_clicked || !$due ? "line-through" : "none"};
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        &:hover {
            white-space: normal;
        }
    }
    i {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        color: ${({ theme }) => theme.colors.primary};
        margin-right: ${({ theme }) => theme.space.base(2)};
    }
`

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    i {
        color: ${({ theme }) => theme.colors.primary};
        padding: 0px ${({ theme }) => theme.space.base(2)};
        display: inline-block;
    }
    >p {
        font-family: "Agency FB";
        color: rgb(77, 77, 77);
        padding: ${({ theme }) => theme.space.base()} 0px 0px 0px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        ${'' /* text-overflow: ellipsis; */}
    }
`

export const CategoryContainer = styled.p`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0px ${({ theme }) => theme.space.base(4)};
    font-family: ${({ theme }) => theme.fontFamily.handwriting1};
`

export const TaskBody = styled.div`
    display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        ${DescriptionContainer} {
            flex-grow: 1;
            flex-basis: 100%;
        }
`

export const TaskContainer = styled.div`
    width: 98%;
    display: grid;
    align-items: center;
    position: relative;
    grid-template-columns: 40px 1fr 50px;
    border-radius: ${({ theme }) => theme.space.base(3)};
    margin: ${({ theme }) => theme.space.base()} 0px;
    padding: ${({ theme }) => theme.space.base()} ${({ theme }) => theme.space.base(2)};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    cursor: default;
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid transparent;
    ${getTaskStyles}
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        ${DeleteTaskButton} {
            visibility: visible;
        }
    }
`;

