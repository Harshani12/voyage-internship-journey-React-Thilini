// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// //import App1 from './App1.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <App />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App2 from "./App2";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
);