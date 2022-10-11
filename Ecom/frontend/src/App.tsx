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
import { refreshProductById } from './app/Reducers/productByIdSlice';
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createOptions } from './Assets/Theme/options';
// ============== REDUCER =========== //
import { fetchUserByEmail } from './app/Reducers/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
// =========== COMPONENTS =========== //
import Home from './Views/Home';
import { Success } from './Views/Success';
import DeleteCreateStock from './Views/DeleteCreateStock';
import OptionsAdmin from './Views/OptionsAdmin';
import ProductDetail from './Views/ProductDetail';
import CreateProduct from './Views/CreateProduct';
function App() {
  const DBUser = useAppSelector((state)=> state.user.dataUser);
  const producto = useAppSelector((state)=> state.productById.productById);
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useState(createTheme(createOptions('light')))
  const { isAuthenticated, user } = useAuth0();
  useEffect(()=>{
    if(isAuthenticated && user?.nickname !== "undefined" && user?.nickname !=='' && user?.nickname !==undefined){
      dispatch(fetchUserByEmail(user))
    }
  },[user])
  useEffect(()=>{
    if(window.location.pathname.slice(0,9) !== '/Producto'){
      refreshProductById();
    }
  },[window.location.pathname])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Navbar/> 
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/CreateProductAdmin" element={<CreateProduct />}/>
          <Route path='/OptionsAdmin' element={<OptionsAdmin/>}/>
          <Route path='/DeleteCreateStock' element={<DeleteCreateStock/>}/>
          <Route path='/Producto/:_id' element={<ProductDetail/>}/>
          <Route path='/Successbuy' element={<Success/>}/>
      </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
