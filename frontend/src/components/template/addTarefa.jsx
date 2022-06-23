import React, { useState } from 'react'

import './css/addTarefas.css'
import Botao from './botao'

const Botão = ( {handleAddTarefa } ) =>{
    const [inputData, setInputData] = useState('')
    const [descData, setDescData] = useState('')

    const handleInput = (e) => {
        setInputData(e.target.value)
    }

    const handleDesc = (e) => {
        setDescData(e.target.value)
    }

    const handleAddTarefaClick = () => {
       if (inputData === '' || inputData.length === 0 ){
           window.alert("Preencha todos os campos antes de adicionar! ¬¬'")
       }else{      
           handleAddTarefa(inputData, descData)
            setDescData("")
            setInputData("")
        }
    }

    return ( 
        <>
            <div className = 'addTarefa-container'>
                <input onChange = {handleInput} value = {inputData} type="text" className = 'addTarefa-input' placeholder = 'Nome do bloco' />
                <div className="addTarefa-button-container">
                    <Botao onClick={handleAddTarefaClick}>Adicionar</Botao>    
                </div>
            </div>
        </>
    )
}

export default Botão;