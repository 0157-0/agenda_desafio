import React, { Component } from 'react'
import Axios from 'axios'
import { Formik, Field, Form } from 'formik';
import Main from '../../components/template/Main';




const headerProps = {
    icon: 'users',
    title: 'Contatos',
    subtitle: 'Cadastro: Incluir, listar, alterar e excluir!'
}

const baseUrl = 'http://localhost:3002/users'
const initialState = {
    user: { name: '', tel: '', cep: '', bairro: '', cidade: ''},
    list: []
}





export default class UserCrud extends Component {
   
    state = { ...initialState }

    

   
    componentWillMount() {
        Axios(baseUrl).then(resp=>{
            this.setState({ list:resp.data })
        })
    }

    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user 
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        Axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list})
        })
    }
   
    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }
    
    updateFild(event) {
        const user = { ...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
        
    }

    

    renderForm(){

       
        class onSubmit {
            
            constructor(values, _actions) {

                this.state = {
                    ...initialState,
                    user: {
                        ...initialState.user,
                        cep: values.cep,
                        bairro: values.bairro,
                        cidade: values.cidade
                    }
                };

            }
        }
        function onBlurCep(ev, setFieldValue) {
            const { value } = ev.target;
        
            const cep = value?.replace(/[^0-9]/g, '');
        
            if (cep?.length !== 8) {
              return;
            }
        
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
              .then((res) => res.json())
              .then((data) => {
                setFieldValue('cep', data.cep);
                setFieldValue('bairro', data.bairro);
                setFieldValue('cidade', data.localidade);
                
              });
          }
     
        
        
        return(
            
            <div className="App">
            <Formik
              onSubmit={onSubmit}
              validateOnMount
              initialValues={{
                cep: '',
                bairro: '',
                cidade: '',
              }}
              
              render={({ setFieldValue, values, user }) => (
               
                  
                <div className="form">

          

<div className="row">
    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e => this.updateFild(e)} placeholder="Digite o nome..." />
       </div>
    </div>

    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>Telefone</label>
            <input type="text" className="form-control" name="tel" value={this.state.user.tel} onChange={e => this.updateFild(e)} placeholder="Digite seu número..." />
       </div>
    </div> 

    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>CEP</label>
            <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)}  className="form-control"    placeholder="Digite seu cep..." />
       </div>
    </div>

    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>Bairro</label>
            <Field type="text" className="form-control" name="bairro" value={values.bairro}   onChange={e => this.updateFild(e)}  placeholder="Digite seu bairro..." />
       </div>
    </div> 

    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>Cidade</label>
            <Field type="text" className="form-control" name="cidade"  value={values.cidade}  onChange={e => this.updateFild(e)}  placeholder="Digite sua cidade..." />
       </div>
    </div> 

</div>
<hr />
<div className="row">
    <div className="col-12 d-flex justify-content-end">
        <button className="btn btn-primary"
        onClick={e => this.save(e)}>
            Salvar
        </button>
        
        <button className="btn btn-secondary ml-2"
         onClick={e => this.clear(e)}>
            Cancelar
        </button>
    </div>
</div>    
           
</div>
                  
              )}
            />
          </div>
        
        )
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        Axios.delete(`${baseUrl}/${user.id}`).then(_resp=> {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return ( 
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.tel}</td>
                    <td>{user.bairro}</td>
                    <td>{user.cidade}</td>

                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>

                </tr>
            )
        })
    }

    render() {
        
        return (

            <Main {...headerProps}>
            {this.renderForm()}
            {this.renderTable()}
        </Main>
           
        )
    }
}