import React from "react";
import "./HomeLayout.styles.scss";
import { Outlet } from "react-router-dom";
import Main from "../../components/main/main.component";
import HomeNavItem from "../../components/HomeNavItem/HomeNavItem.component";

const HomeLayout = () => (
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
        </Main>

        <Main
            style={{
                width: "68vw",
                height: "85vh"
            }}
        >
            <Outlet />
        </Main>
    </div>
);

export default HomeLayout;