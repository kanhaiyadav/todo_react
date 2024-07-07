import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.component';
import Layout from './components/Layout/Layout.component';
function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='user/settings' element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App;
