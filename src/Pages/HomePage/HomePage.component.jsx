import React from "react";
import './HomePage.styles.scss';
import Main from "../../components/main/main.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";

const HomePage = () => {
    return (
        <div className="HomePage">
            <Main>
                <CustomButton
                    onClick={
                        () => {
                            console.log("helloooo");
                        }
                    }
                >
                    New Task
                </CustomButton>
            </Main>
        </div>
    )
}

export default HomePage;