// ============ IMPORT UTILITIES ======== // 

import Navbar from './Views/Navbar';
import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useRoutes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
// ============== REDUCER =========== // 
function App() {
  return (
    <div className="App">
     <Navbar/>
    </div>
  );
}

export default App;
