import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/Routes/App';
import LoggedInApp from './Components/Routes/LoggedInApp';

import '../src/CSS/Header.css'
import '../src/CSS/FirstLoadScreen.css'
import '../src/CSS/Main.css';
import '../src/CSS/Signup-login.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";


export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path='/LoggedInApp' element={<LoggedInApp />} />
      </Routes>
  </Router>
);

