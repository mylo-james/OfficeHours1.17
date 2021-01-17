import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AnimalContextProvider from './context/AnimalContext';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimalContextProvider>
                <App />
            </AnimalContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
