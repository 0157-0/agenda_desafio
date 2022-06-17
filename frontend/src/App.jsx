import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { AuthProvider } from "./contexts/auth";
import './App.css'
import Routes from "./Routes"
import { BrowserRouter } from 'react-router-dom'
import Logo from "./components/template/Logo";
import Header from "./components/template/Header";
import Nav from "./components/template/Nav";
import Footer from "./components/template/Footer";
import Main from "./components/template/Main";
import Home from "./pages/Home/Home";






export default props =>

<BrowserRouter>
<AuthProvider>

<div className="app">
   
    <Logo />
    <Nav />
    <Footer />
    <Routes />
    </div>
    </AuthProvider> 

</BrowserRouter>


