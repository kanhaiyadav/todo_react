import React from "react";
import "./HomeLayout.styles.scss";
import { Outlet } from "react-router-dom";
import Main from "../../components/main/main.component";
import HomeNavItem from "../../components/HomeNavItem/HomeNavItem.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import TaskForm from "../../components/TaskForm/TaskForm.component";
import { selectDisplay } from "../../Redux/TaskForm/TaskFormSelector";
import { useSelector, useDispatch } from "react-redux";
import { setDisplay } from "../../Redux/TaskForm/TaskFormSlice";
import LinearColor from "../../components/Loader/loader";
import { fetchTasks } from "../../Redux/Task/TaskSlice";
import { useEffect } from "react";
import { selectIsLoading} from "../../Redux/Task/TaskSelector";
import { reset } from "../../Redux/TaskForm/TaskFormSlice";
import { selectUpdateTaskId } from "../../Redux/TaskForm/TaskFormSelector";
import { verify } from "../../Redux/user/user.slice";
import { selectError, selectJwt } from "../../Redux/user/user.selector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomeLayout = () => {
    const dispatch = useDispatch();
    const display = useSelector(selectDisplay);
    const updateTaskId = useSelector(selectUpdateTaskId);
    const error = useSelector(selectError);
    const navigate = useNavigate();
    const token = useSelector(selectJwt);
    const handleClick = () => {
        dispatch(reset());
        dispatch(setDisplay(true));
    }
    useEffect(() => {
        console.log(token);
        dispatch(verify(token));
    }, [dispatch, token]);
    
    useEffect(() => {
        if (error) {
            navigate("/login");
        }
    }, [error, navigate]);


    return (
        <div className="home-layout">
            <Main
                className="home-nav"
                style={{
                    padding: "5px 10px",
                }}
            >
                <HomeNavItem link=".">Tasks</HomeNavItem>
                <HomeNavItem link="completed">Completed</HomeNavItem>
                <HomeNavItem link="deleted">Deleted</HomeNavItem>
                <HomeNavItem link="late">Late</HomeNavItem>
                <CustomButton
                    type="button"
                    style={{
                        borderRadius: "50%",
                        marginLeft: "auto",
                        padding: "1px",
                        flexGrow: "0",
                        flexShrink: "0",
                    }}
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-plus"></i>
                </CustomButton>
            </Main>

            {
                display?
                    <Main
                        style={{
                            width: "68vw",
                            flexGrow: "0",
                            flexShrink: "0",
                        }}
                    >
                        <TaskForm 
                            type="create"
                            onSubmit={(event) => {
                                event.preventDefault();
                                console.log(event.target)
                            }
                            }
                        />
                    </Main>
                    : null
            }
            {
                updateTaskId?
                    <Main
                        style={{
                            width: "68vw",
                            flexGrow: "0",
                            flexShrink: "0",
                        }}
                    >
                        <TaskForm 
                            type="update"
                            onSubmit={(event) => {
                                event.preventDefault();
                                console.log(event.target)
                            }
                            }
                        />
                    </Main>
                    : null
            }


            <Main
                style={{
                    width: "68vw",
                    maxHeight: "85vh",
                    flexGrow: "1",
                    flexShrink: "1",
                    overflow: "auto",
                    position: "relative"
                }}
            >
                {
                    useSelector(selectIsLoading) ? <div className="loader"><LinearColor /></div>: null
                }
                <Outlet />
            </Main>
        </div>
    )
}

export default HomeLayout;