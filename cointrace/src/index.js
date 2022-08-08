import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/Routes/App';

import '../src/CSS/Header.css'
import '../src/CSS/Main.css';
import '../src/CSS/Signup-login.css';


export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

