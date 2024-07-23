import React from "react";
import { NavContainer, HeaderContainer } from "./nav.styles";
import NavItemDirectory from "../navItemDirectory/navItemDirectory.component";
import favicon from "../../images/favicon.png";
import CustomButton from "../CustomButton/CustomButton.component";
import { setJwt } from "../../Redux/user/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectJwt } from "../../Redux/user/user.selector";
import { toast } from "react-toastify";
import { NavItemContainer } from "../navItem/navItem.styles";

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
                    link: "profile",
                    title: "Profile",
                    icon: "fa-solid fa-user"
                },
                // {
                //     link: "upgrade",
                //     title: "Upgrade",
                //     icon: "fa-solid fa-dollar-sign"
                // },
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
        <NavContainer>
            <HeaderContainer to={"/home"}>
                <img src={favicon} alt="" />
                <span>ToDo</span>
            </HeaderContainer>
            <NavItemDirectory items={state.user} />
            <hr />
            <NavItemDirectory items={state.general} />
            <div
                style={{
                    flexGrow: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                }}
            >
            <NavItemContainer as={CustomButton}
                $shape='regular'
                $effect='scale'
                style={{
                    position: "relative",
                    width: "90%",
                    marginBottom: "20px",
                    padding: '5px',
                }}
                onClick={handleClick}
            >
            <i className="fa-solid fa-right-from-bracket"></i>
                <span>Logout</span>
            </NavItemContainer>
            </div>
        </NavContainer>
    )
}

export default React.memo(Nav);