import Main from '../../components/template/Main';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Home.css';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    
    <Main icon="book" title="Desafio" subtitle="Desenvolver uma agenda" >
    <div className="display-4">Bem-vindo!</div> 
    <hr />
    <p className="mb-0">Sistema para exemplificar a construção de um cadastro em React!</p> 
    <button className="btn btn-dark"><Link className="estilo" to='/users'>
                <i className="fa fa-users"></i> Contatos
            </Link></button>  
    </Main>

      
  );
};

export default Home;

