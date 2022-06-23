import React from 'react'
import { Switch, Redirect } from 'react-router'
import Signin from "./pages/Signin/index.jsx";
import Signup from "./pages/Signup/index";
import useAuth from './hooks/useAuth';
import UserCrud from "./pages/User/UserCrud";
import Bloco from "./pages/User/Bloco";
import Home from "./pages/Home/Home";
import { Fragment } from "react";
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Signin />;
  };
  
  
  
 export default props => {

  const location = useLocation();
return (
<Fragment>
<TransitionGroup>
  <CSSTransition key={location.key} classNames="transition" timeout={500}>
        <Routes location={location}>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Private Item={UserCrud} />} />
          <Route  path='/users' element={<UserCrud/>} />
          <Route  path='/bloco' element={<Bloco/>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
      </Fragment>
);
 }
  
