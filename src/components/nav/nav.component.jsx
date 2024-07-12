import React from "react";
import "./nav.styles.scss";
import NavItemDirectory from "../navItemDirectory/navItemDirectory.component";
import favicon from "../../images/favicon.png";
import CustomButton from "../CustomButton/CustomButton.component";
import { setJwt } from "../../Redux/user/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectJwt } from "../../Redux/user/user.selector";
import { toast } from "react-toastify";

const Nav = () => {
    const dispatch = useDispatch();
    const jwt = useSelector(selectJwt);
    const [state] = React.useState({
        user:
            [
                {
                    link: "home",
                    title: "Home",
                    icon: "fa-solid fa-house"
                },
                {
                    link: "/user/settings",
                    title: "Profile",
                    icon: "fa-solid fa-user"
                },
                {
                    link: "asdasd",
                    title: "Upgrade",
                    icon: "fa-solid fa-dollar-sign"
                },
            ],
        general:
            [
                {
                    link: "/user/settin",
                    title: "Report Bug",
                    icon: "fa-solid fa-bug"
                },
                {
                    link: "asda",
                    title: "Feedback",
                    icon: "fa-solid fa-comment"
                },
                {
                    link: "asda",
                    title: "Suggest Feature",
                    icon: "fa-solid fa-lightbulb"
                },
            ],

    })
    const handleClick = () => {
        dispatch(setJwt(""));
        toast.success("Logged out successfully");
    }
    return (
        <nav>
            <div className="Header">
                <img src={favicon} alt="" />
                <span>ToDo</span>
            </div>
            <NavItemDirectory items={state.user} />
            <hr />
            <NavItemDirectory items={state.general} />
            {
                jwt ? 
                    <CustomButton onClick={handleClick}
                        style={{
                            marginLeft: "5px"
                        }}
                        buttonStyle={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}
                    ><i className="fa-solid fa-right-from-bracket"></i><span className="nav-text">Logout</span></CustomButton>
                : null
            }
        </nav>
    )
}

export default React.memo(Nav);