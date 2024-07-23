import { styled, css } from "styled-components";
import { flexCenter, borderOutline } from "../../styles/mixins";

const regular = css`
    border-radius: ${({ theme }) => theme.space.base()};
    box-shadow: 2px 2px 4px 2px rgba(27, 27, 27, 0.2);
    padding: ${({ theme }) => theme.space.base(1.3)} ${({ theme }) => theme.space.base(2)};
`
const scale = css`
    &:hover {
        transform: scale(1.04);    
    }
    &:active {
        transform: scale(0.95);
    }
`

const circular = css`
    border-radius: ${({ theme }) => theme.radii.circle};
    padding: ${({ theme }) => theme.space.base(2)};
`
const inverted = css`
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: white;
        color: ${({ theme }) => theme.colors.primary};
    }
`
const getStyle = ({ $shape }) => {
    switch ($shape) {
        case "circular":
            return circular
        default:
            return regular
    }
}

const getEffect = ({ $effect }) => {
    switch ($effect) {
        case "inverted":
            return inverted
        case "scale":
            return scale
        default:
            return null
    }
}

export const CustomButtonContainer = styled.button`
    background: transparent;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    ${borderOutline}
    color: white;
    flex-direction: row;
    ${flexCenter};
    filter: drop-shadow(2px 2px 3px rgb(0, 0, 0));
    ${getStyle}
    ${getEffect}
`
