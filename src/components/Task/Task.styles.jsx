import { styled, css } from "styled-components";

const dueStyles = css`
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const importantStyles = css`
    border: 2px solid #f1fe0064;
    background-color: #f1fe0064;
`;

const getTaskStyles = ({ important }) => {
    if (important) return importantStyles;
    else return dueStyles
}

export const CheckboxContainer = styled.div`
    justify-self: center;
    display: grid;
    place-items: center;
    height: 20px;
    z-index: 123400000;
`

export const DeleteTaskButton = styled.div`
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 1000;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    visibility: hidden;
    i{
        &:hover{
            color: red;
        }
    }
`

export const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 0.95fr 0.05fr;
    p{
        padding: 0px 10px;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: ${({ $checkbox_clicked, $due }) => $checkbox_clicked || !$due ? "line-through" : "none"};
        font-family: Open Sans;
        &:hover {
            white-space: normal;
        }
    }
    i {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 10px;
    }
`

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    i {
        color: ${({ theme }) => theme.colors.primary};
        padding: 0px 10px;
        display: inline-block;
    }
    >p {
        font-family: "Agency FB";
        color: rgb(77, 77, 77);
        padding: 5px 0px 0px 0px;
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
    margin: 0px 20px;
    font-family: Playwrite PE;
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
    ${getTaskStyles}
    &:hover {
        border-color: black;
        ${DeleteTaskButton} {
            visibility: visible;
        }
    }
`;

