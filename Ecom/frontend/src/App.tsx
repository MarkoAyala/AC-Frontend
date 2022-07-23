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
import { useAuth0 } from "@auth0/auth0-react";
// ============== REDUCER =========== //
import { fetchUserByEmail } from './app/Reducers/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
// =========== COMPONENTS =========== //
import Home from './Views/Home';
import CreateProduct from './Views/CreateProduct';
function App() {
  const DBUser = useAppSelector((state)=> state.user.dataUser);
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAuth0();
  useEffect(()=>{
    if(isAuthenticated){
      dispatch(fetchUserByEmail(user));
    }
  },[user])
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CreateProductAdmin" element={<CreateProduct />}/>
     </Routes>

    </div>
  );
}

export default App;
