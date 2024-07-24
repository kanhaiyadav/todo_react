import React from 'react'
import welcome from '../../assets/welcome.png';
import feature from '../../assets/features.png';
import { Features, FeaturesText, LandingPageContainer, NavContainer } from './LandingPage.styles';
import { Header } from './LandingPage.styles';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToTop = () => {
        const page = document.getElementById('landingPage');
        page.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <LandingPageContainer id="landingPage">
            <NavContainer>
                <span onClick={scrollToTop}>Get Started</span>
                <span onClick={()=>{handleClick('feature')}}>Features</span>
                <span>why us</span>
            </NavContainer>
            <Header>
                <div>
                    <h1>Welcome to Your Personal Task Manager!</h1>
                    <i>Stay organized and on top of your tasks with our simple and intuitive todo app. Whether it's daily chores, work projects, or personal goals, we've got you covered.</i>
                    <button onClick={() => {
                        navigate('home');
                    }}>Get Started</button>
                </div>
                <img src={welcome} alt="landing page" />
            </Header>
            <Features id='feature'>
                <FeaturesText>
                    <h1>Key Features</h1>
                    <ul>
                        <li><span>Easy Task Management:</span> Add, edit, and delete tasks with ease.</li>
                        <li><span>Custom Categories:</span> Organize tasks into categories that make sense for you.</li>
                        <li><span>Due Dates & Reminders:</span> Never miss a deadline with our built-in reminder system.</li>
                        <li><span>Progress Tracking:</span> Mark tasks as completed and see your progress at a glance.</li>
                        <li><span>Theming Options:</span> Personalize your experience with our customizable themes.</li>
                    </ul>
                </FeaturesText>
                <img src={feature} alt="features" />
            </Features>

        </LandingPageContainer>
    )
}

export default LandingPage;