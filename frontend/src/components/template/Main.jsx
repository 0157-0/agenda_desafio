import './Main.css'
import React from 'react'
import Header from './Header'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";



const Main = (props) => {
    const { signout } = useAuth();
    const navigate = useNavigate();
  
    return (

    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children} 
                
            </div>
        </main>
    </React.Fragment>
      );
    };
    
    export default Main;