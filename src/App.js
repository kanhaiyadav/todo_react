import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.component';
import HomeLayout from './Pages/HomeLayout/HomeLayout.component';
import TaskDirectory from './components/TaskDirectory/TaskDirectory.component';
import SignUpPage from './Pages/SignUpPage/SignUpPage.component';
import SignInPage from './Pages/SingInPage/SignInPage.component';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='signup' element={<SignUpPage />} />
                <Route path='login' element={<SignInPage />} />
                <Route path='home' element={<HomeLayout />} >
                    <Route index element={<TaskDirectory type="due"/>} />
                    <Route path='completed' element={<TaskDirectory type="completed"/>} />
                    <Route path='deleted' element={<TaskDirectory type="deleted" />} />
                    <Route path='late' element={<TaskDirectory type="late" />} />
                </Route>
                <Route path="profile" element={<HomeLayout />} />
                <Route path="upgrade" element={<HomeLayout />} />
            </Route>
        </Routes>
    )
}

export default App;
