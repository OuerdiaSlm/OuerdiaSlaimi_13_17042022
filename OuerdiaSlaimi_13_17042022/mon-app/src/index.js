import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/headerNav';
import Authentication from './components/authentication/authentication';
import IndexBanner from './components/indexBanner/indexBanner';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage';
import SingInPage from './pages/SingInPage';
import SingIn from './components/sign-in/sign-in';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/SingInPage" element={<SingInPage/>}/>
      </Routes>
    </Router>

  
  {/* <SingInPage/> */}


  
    {/*
    <App /> 
    <Header/>
    <Authentication/> 
    <IndexBanner/>
    <Features/>
    <Footer/>
    */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
