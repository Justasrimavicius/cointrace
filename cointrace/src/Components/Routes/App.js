import React, { useEffect, useState } from "react";
import LoggedInApp from "./LoggedInApp";
import UnauthorizedApp from './UnauthorizedApp'

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App(){


    return(
      <Router>
        <Routes>
          <Route exact path="/UnauthorizedApp" element={<UnauthorizedApp />} />
          <Route exact path='/LoggedInApp' element={<LoggedInApp />} />
        </Routes>
      </Router>
    )
}

export default App;