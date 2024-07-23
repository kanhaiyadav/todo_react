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
export const TaskInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 25px;
    margin-top: 10px;
    p{
        color: #ee754e;
        font-family: Playwrite AU TAS;
        span{
            font-weight: bold;
            color: #2b2b2b
        }
    }
`
export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    div{
        width: 110px;
        height: 110px;
    }
    i{
        color: #2b2b2b;
        /* border: 1px solid #2b2b2b; */
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    gap:5px;
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
    /* width: 50%; */
    gap: 20px;
`