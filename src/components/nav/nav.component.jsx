import React from "react";
import { NavContainer, HeaderContainer } from "./nav.styles";
import NavItemDirectory from "../navItemDirectory/navItemDirectory.component";
// import favicon from "/favicon.ico";
import CustomButton from "../CustomButton/CustomButton.component";
import { setJwt } from "../../Redux/user/user.slice";
import { useDispatch} from "react-redux";
import { toast } from "react-toastify";
import { NavItemContainer } from "../navItem/navItem.styles";

const Nav = () => {
    const dispatch = useDispatch();
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

            ],
        general:
            [
                {
                    link: "report-bug",
                    title: "Report Bug",
                    icon: "fa-solid fa-bug"
                },
                {
                    link: "feedback",
                    title: "Feedback",
                    icon: "fa-solid fa-comment"
                },
                {
                    link: "suggest-feature",
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
                <img src='/favicon.ico' alt="" />
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