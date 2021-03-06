import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Botao from "./botao"

import './css/infos.css'

const Infos = () => {
    const params = useParams()
    const navigate = useNavigate();
    
    const handleVoltar = () => {
        navigate.goBack()
    }
    
    return (
        <>
            <div className="tarefa-detalhes">
                <h2>{params.tarefaTitulo}</h2>
                <p>{params.tarefaDesc}</p>
            </div>

            <div className = 'infos-container'>
                <Botao onClick = {handleVoltar}>Voltar</Botao>
            </div>
        </>
    );
}

export default Infos;