import React,{useEffect} from 'react'
import { MainContainer, CommonInfo, UserInfo, TaskInfo, ProgressBarContainer } from './profileLayout.styles'
import { useSelector } from 'react-redux'
import { selectAvatar, selectEmail, selectName } from '../../Redux/user/user.selector'
import { selectCreatetedTasks, selectCompletedTasks, selectDeletedTasks } from '../../Redux/user/user.selector'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavContainer } from './profileLayout.styles'
import HomeNavItem from '../../components/HomeNavItem/HomeNavItem.component'
import CircularProgressBar from '../../components/CircularProgressBar/CircularProgressBar.component'
import { selectJwt } from '../../Redux/user/user.selector'
import { verify } from '../../Redux/user/user.slice'
import { selectError } from '../../Redux/user/user.selector'
import { useDispatch } from 'react-redux'

const ProfileLayout = () => {
    const avatar = useSelector(selectAvatar);
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const createdTasks = useSelector(selectCreatetedTasks);
    const deletedTasks = useSelector(selectDeletedTasks);
    const completedTasks = useSelector(selectCompletedTasks);
    const navigate = useNavigate();
    const token = useSelector(selectJwt);
    const dispatch = useDispatch();
    const error = useSelector(selectError);


    useEffect(() => {
        dispatch(verify(token));
    }, [dispatch, token]);

    useEffect(() => {
        if (error) {
            navigate("/login");
        }
    }, [error, navigate]);
    
    
    return (
        <MainContainer>
            <CommonInfo>
                <img src={avatar} alt="profile" />
                <UserInfo>
                    <h1>{name}</h1>
                    <i>{email}</i>
                    <TaskInfo>
                        <p>Task Created: <span>{createdTasks}</span></p><p>Task Deleted: <span>{deletedTasks}</span></p><p>Task Completed: <span>{completedTasks}</span></p>
                    </TaskInfo>
                </UserInfo>
                <ProgressBarContainer>
                    <i>Your task completion rate</i>
                    <CircularProgressBar start={0} end={(createdTasks / (createdTasks + deletedTasks) * 100)} />
                </ProgressBarContainer>
            </CommonInfo>
            <hr
                style={{
                    width: "100%",
                }}
            />
            <NavContainer>
                <HomeNavItem link={"."}>Account</HomeNavItem>
                <HomeNavItem link={"settings"}>Settings</HomeNavItem>
            </NavContainer>
            <Outlet />
        </MainContainer>
    )
}

export default React.memo(ProfileLayout);