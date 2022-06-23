import React from 'react'
import "./css/tarefa.css"
import { useNavigate } from 'react-router-dom'

import { CgClose, CgInfo } from "react-icons/cg"

const Tarefa = ({ tarefa, handleTarefaClick, handleRemoverTarefa }) => {
    const navigate = useNavigate();

    const handleTarefasDetalhes = () => {
        navigate(`/${tarefa.titulo}/${tarefa.descricao}`)
    }

    return ( 
        <div 
        className = 'containerTarefas' 
        style={tarefa.finalizado ? {borderLeft: '6px solid #007bff'} : {} }>
                <div className="titulo-Container" onClick = {() => handleTarefaClick(tarefa.id)}>
                    {tarefa.titulo}
                </div>

                <div className="botões-container">
                    
                    
                    <button className = 'remover-Tarefa' 
                    onClick = {() => handleRemoverTarefa(tarefa.id)}>
                        <CgClose />                          
                    </button>

                </div>
        </div>
    )
}
export default Tarefa;