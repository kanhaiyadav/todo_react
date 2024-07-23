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
        color: ${({ theme }) => theme.colors.primary};;
        font-family: Playwrite AU TAS;
        span{
            font-weight: bold;
            color: ${({ theme }) => theme.colors.textColor};
        }
    }
`
export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space.base(2)};
    div{
        width: 110px;
        height: 110px;
    }
    i{
        color: ${({ theme }) => theme.colors.textColor};
        padding: ${({ theme }) => theme.space.base()} ${({ theme }) => theme.space.base(2)};
        border-radius: ${({ theme }) => theme.radii.sm};
        box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
    }
`

export const UserInfo = styled.div`
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    gap:${({ theme }) => theme.space.base()};
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    width: 100%;
    gap: ${({ theme }) => theme.space.base(4)};
    .active{
        background-color: ${({ theme }) => theme.colors.primary};
    }
`

export const MainContainer = styled(Main)`
    height: 94vh;
    /* width: 50%; */
    gap: ${({ theme }) => theme.space.base(4)};
`