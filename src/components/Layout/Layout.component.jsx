import React from "react";
import "./Layout.styles.scss";
import { Outlet} from "react-router-dom";
import Nav from "../nav/nav.component";
import { selectJwt } from "../../Redux/user/user.selector";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Layout = () => {
    const jwt = useSelector(selectJwt);
    return (
        <>
            {
                jwt ? <Nav />: null
            } 
            <Outlet />
        </>
    )
    
}

export default React.memo(Layout);