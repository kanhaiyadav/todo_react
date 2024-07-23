import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const SignUpFormContainer = styled.div`
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
    position: relative;
    flex-direction: column;
    ${flexCenter};
    gap: 30px;
`