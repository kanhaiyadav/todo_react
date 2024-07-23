import { styled } from "styled-components";
import { borderOutline } from "../../styles/mixins";

export const FormTextareaContainer = styled.div`
    flex-grow: 1;
    flex-basis: 100%;
    textarea{
        width: 100%;
        padding: ${props => props.theme.space.sm};
        font-size: ${props => props.theme.fontSizes.xl};
        display: inline;
        ${borderOutline}
        background-color: ${props => props.theme.colors.secondary};
        border-radius: ${props => props.theme.radii.md};
        border-bottom: 2px solid ${props => props.theme.colors.primary};
        font-family: ${({ theme }) => theme.fontFamily.primary};
    }
`