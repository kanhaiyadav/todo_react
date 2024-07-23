import styled from "styled-components";


export const SocailAuthContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    margin-bottom: ${({ theme }) => theme.space.base(4)};

`

export const SocialAuth = styled.div`
    display: flex;
    background-color: white;
    width: 30%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding:8px ${({ theme }) => theme.space.base(2)};
    border-radius: 5px;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
    cursor: default;
    img{
        width: 25px;
    }
`   

export const SignupPageContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: ${({ theme }) => theme.space.base(4)} 0px;
        color: white;
        a{
            text-decoration: none;
            font-size: 1.05rem;
            color: white;
            font-weight: ${({ theme }) => theme.fontWeights.medium};
            margin: 0px ${({ theme }) => theme.space.base()};
            &:hover{
                text-decoration: underline;
            }
        }
    }
`