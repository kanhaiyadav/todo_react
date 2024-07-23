import { styled } from "styled-components";
import { borderOutline } from "../../styles/mixins";

export const FormInputContainer = styled.input`
    flex-grow: 0.5;
    flex-basis: 45%;
    padding: ${props => props.theme.space.sm};
    font-size: ${props => props.theme.fontSizes.xl};
    display: inline;
    ${borderOutline}
    background-color: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.radii.md};
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    font-family: ${({ theme }) => theme.fontFamily.primary};
`