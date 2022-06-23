import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tarefas from '../../components/template/tarefas'
import NovaTarefa from '../../components/template/addTarefa'
import Infos from '../../components/template/tarefaInfos'
import Cabecalho from '../../components/template/cabecalho'
import Main from '../../components/template/Main';
import './bloco.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const Bloco = () =>{
  var [tarefas, setTarefas] = useState([
  ])

  // Função pra adicionar tarefa
  const handleAddTarefa = (tarefaTitulo, tarefaDesc) => {
    const novaTarefa = [...tarefas, {
      titulo: tarefaTitulo,
      id: uuidv4(),
      finalizado: false,
      descricao: tarefaDesc,
    }]

    setTarefas(novaTarefa)
  }

  // Função pra remover a tarefa ao clicar no botão
  const handleRemoverTarefa = (tarefaID) => {
    const novaTarefaR = tarefas.filter(tarefa => tarefa.id !== tarefaID)

    setTarefas(novaTarefaR)
  }

  // Função pra ao clicar na tarefa ficar como concluída
  const handleTarefaClick = (tarefaID) => {
        const novaTarefa2 = tarefas.map( tarefa => {
          if (tarefa.id === tarefaID ){
            return {...tarefa, finalizado: !tarefa.finalizado}
          }else{
            return tarefa
          }
        })
        setTarefas(novaTarefa2)
  }
  // Função pra ao clicar na tarefa ficar como concluída
  
  return (
    <Main  icon="plus" title="Tarefas" subtitle="Ainda em versão web, em breve o lançamento do aplicativo para Android e IOS.">
      <div className = 'blococontainer'>
      <Cabecalho />

         
            <NovaTarefa handleAddTarefa = {handleAddTarefa}  />
            <Tarefas tarefas={tarefas} Infos={Infos} handleTarefaClick = {handleTarefaClick} handleRemoverTarefa = {handleRemoverTarefa} />
              
          
      </div>
   
    </Main>
  )
}

export default Bloco