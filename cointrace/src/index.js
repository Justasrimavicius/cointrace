import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/Routes/App';

import '../src/CSS/Header.css'
import '../src/CSS/FirstLoadScreen.css'
import '../src/CSS/Main.css';
import '../src/CSS/Signup-login.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  // <Router>
  //     <Routes>
  //         <Route exact path="/" element={<App />} />
  //         <Route exact path='/LoggedInApp' element={<LoggedInApp />} />
  //     </Routes>
  // </Router>
);

