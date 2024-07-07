import React from "react";
import "./nav.styles.scss";
import NavItemDirectory from "../navItemDirectory/navItemDirectory.component";
import favicon from "../../images/favicon.png";


class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            user: 
                [
                    {
                        link: "/user/settings",
                        title: "Profile",
                        icon: "fa-solid fa-user"
                    },
                    {
                        link: "asdalj",
                        title: "Log Out",
                        icon: "fa-solid fa-right-from-bracket"
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
            
        }
    }
    render() {
        return (
            <nav>
                <div className="Header">
                    <img src={favicon} alt="" />
                    <span>ToDo</span>
                </div>
                <NavItemDirectory items={this.state.user}/>
                <hr />
                <NavItemDirectory items={this.state.general}/>
            </nav>
        )
    }
}

export default Nav;