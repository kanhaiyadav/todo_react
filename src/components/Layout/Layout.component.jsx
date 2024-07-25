import React, {useState} from "react";
import "./Layout.styles.scss";
import { Outlet, useLocation} from "react-router-dom";
import Nav from "../nav/nav.component";
import { selectJwt } from "../../Redux/user/user.selector";
import { useSelector } from "react-redux";
import { ThemeButton } from "./Layout.styles";
// import { Link } from "react-router-dom";

const Layout = ({toggleTheme}) => {
    const [sun, setSun] = useState(true);
    const location = useLocation();
const jwt = useSelector(selectJwt);
    return (
        <>
            <ThemeButton
                onClick={() => {
                    toggleTheme();
                    setSun(!sun);
                }}
                $sun={sun}
            >
                {
                    !sun ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>
                }
            </ThemeButton>
            {
                jwt && location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login' ? <Nav />: null
            } 
            <Outlet />
        </>
    )
    
}

export default React.memo(Layout);