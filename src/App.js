import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.component';
import HomeLayout from './Pages/HomeLayout/HomeLayout.component';
import TaskDirectory from './components/TaskDirectory/TaskDirectory.component';
import SignUpPage from './Pages/SignUpPage/SignUpPage.component';
import SignInPage from './Pages/SingInPage/SignInPage.component';
import ProfileLayout from './Pages/ProfileLayout/profileLayout.component';
import Account from './Pages/ProfileLayout/Account/Account.component';
import Settings from './Pages/ProfileLayout/Settings/settings.component';
import Sorry from './components/Sorry/Sorry.component';
import LandingPage from './Pages/LandingPage/LandingPage.coponent';


function App({ toggleTheme }) {
    return (
        <Routes>
            <Route path='/' element={<Layout toggleTheme={toggleTheme} />}>
                <Route index element={<LandingPage />} />
                <Route path='signup' element={<SignUpPage />} />
                <Route path='login' element={<SignInPage />} />
                <Route path='home' element={<HomeLayout />} >
                    <Route path='all' element={<TaskDirectory type="all" />} />
                    <Route index element={<TaskDirectory type="due" />} />
                    <Route path='important' element={<TaskDirectory type="important" />} />
                    <Route path='completed' element={<TaskDirectory type="completed" />} />
                    <Route path='late' element={<TaskDirectory type="late" />} />
                </Route>
                <Route path="profile" element={<ProfileLayout />}>
                    <Route index element={<Account />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="report-bug" element={<Sorry topic={"reportBug"}/>} />
                <Route path="feedback" element={<Sorry topic={"feedback"} />} />
                <Route path="suggest-feature" element={<Sorry topic={"suggestFeature"}/>} />
            </Route>
        </Routes>
    )
}

export default App;
