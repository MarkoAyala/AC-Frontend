import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './app/store';
import App from './App';
import axios from 'axios';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";

if(window.location.href.slice(0,16) !== 'http://localhost'){
  console.log('entre', window.location.href.slice(0,16))
  axios.defaults.baseURL = "https://altocuero-backend.onrender.com/"
}else {
  axios.defaults.baseURL = "http://localhost:3001"
}
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  
    <Provider store={store}>
      <Auth0Provider domain='dev-iy13f2v3.us.auth0.com' clientId='95cNMDBmtWhohIHxRfzDLizkLbm7sxb8' redirectUri={window.location.origin}>
      <Router>
      <App />
      </Router>
      </Auth0Provider>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
