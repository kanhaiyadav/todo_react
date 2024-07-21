import styled from "styled-components";
import Main from "../../components/main/main.component"

export const CommonInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img{
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        background-color: aliceblue;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    width: 100%;
    gap: 20px;
`

export const MainContainer = styled(Main)`
    height: 94vh;
    width: 50%;
    gap: 20px;
`