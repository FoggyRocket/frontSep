import React, {Component} from 'react';
import './styles.css'
import {SideBar,Modal} from '../../components'
import SubRoutes from '../../../SubRoutes';
import { logoutEndpoint} from  '../../services/auth-ws'
 class Main extends Component{

    state={
        //JSON.parse(//para regresarllo a obj)
        // valor || valor1 si no se cumple uno muestrame el otro valor
        user: JSON.parse(localStorage.getItem("user")) || {},
        
    }

    componentDidMount(){
        const {user} = this.state
        const {history} = this.props
        //Object.keys({}) noss regresa un [key,key,key]
        if(!Object.keys(user).length || user === undefined){
            history.push('/login')
        }
    }


    onClickMenu = () => {

    }

    onLogout=()=>{
        const {history} = this.props
        logoutEndpoint()
        .then(res=>{
            localStorage.removeItem('user')
            history.push('/')
        })
        .catch(error=>{
            console.log("console error",error)
        })
    }
    render(){
       const {menus,user} = this.state
       const {onLogout} = this
        return(
            <div className="row-app">


                <SideBar
                    user={user}
                    onLogout={onLogout}
                />
                <SubRoutes/>
            </div>
        )
    }
}


export default Main