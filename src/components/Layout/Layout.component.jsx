import React from "react";
import "./Layout.styles.scss";
import { Outlet} from "react-router-dom";
import Nav from "../nav/nav.component";

const Layout = () => (
    <>
        <Nav />
        <Outlet />
    </>
)

export default Layout;