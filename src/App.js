import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.component';
import HomeLayout from './Pages/HomeLayout/HomeLayout.component';
import TaskList from './components/TaskList/TaskList.component';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='home' element={<HomeLayout />} >
                    <Route index element={<TaskList />} />
                    <Route path='completed' element={<TaskList />} />
                    <Route path='deleted' element={<TaskList />} />
                    <Route path='late' element={<TaskList />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App;
