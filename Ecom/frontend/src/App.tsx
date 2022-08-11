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
// ============ IMPORT UTILITIES ============ //
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createOptions } from './Assets/Theme/options';
// ============== REDUCER =========== //
import { fetchUserByEmail } from './app/Reducers/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
// =========== COMPONENTS =========== //
import Home from './Views/Home';
import CreateProduct from './Views/CreateProduct';
function App() {
  const DBUser = useAppSelector((state)=> state.user.dataUser);
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useState(createTheme(createOptions('light')))
  const [loadSkeleton , setLoadSkeleton] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  useEffect(()=>{
    if(isAuthenticated){
      setLoadSkeleton(true)
      dispatch(fetchUserByEmail(user)).then(()=> setLoadSkeleton(false))
    }
  },[user])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Navbar loadSkeleton={loadSkeleton}/> 
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/CreateProductAdmin" element={<CreateProduct />}/>
      </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
