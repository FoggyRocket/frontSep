

import React,  {Component} from 'react';
import './styles.css'
import logo from '../../assets/svg/logo.svg'

export default class Auth  extends Component{

    render(){
        return(
            <section className="auth-container">
                <div className="card">
                    <form>
                        <img src={logo} width='20%'/>
                        <div className="mb-3">
                        <label 
                            for="exampleFormControlInput1" 
                            class="form-label">Correo electronico
                        </label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label 
                            for="exampleFormControlInput1" 
                            class="form-label">Contraseña
                        </label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                        >Entrar</button>
                    </form>
                </div>
            </section>
        )
    }
}