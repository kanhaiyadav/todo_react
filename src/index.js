import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/GlobalStyle';

//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Theme
import { ThemeProvider } from 'styled-components';
import { summer, space } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Root = () => {
    const [theme, setTheme] = useState(summer); // Default theme

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === space ? summer : space);
    };

    return (
        <Provider store={store}>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <GlobalStyle />
                            <App toggleTheme={toggleTheme} />
                        </ThemeProvider>
                        <ToastContainer />
                    </BrowserRouter>
                </PersistGate>
            </React.StrictMode>
        </Provider>
    );
};

root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
