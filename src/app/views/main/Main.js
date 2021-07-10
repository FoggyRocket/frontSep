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
        isOpenAdmin:false
    }

    componentDidMount(){
        const {user} = this.state
        const {history} = this.props
        //Object.keys({}) noss regresa un [key,key,key]
        if(!Object.keys(user).length || user === undefined){
            history.push('/login')
        }
    }


    onClickMenu = (key) => {
        let {isOpenAdmin} = this.state
        const {history} =  this.props
        switch (key) {
            case 'admin':
                this.setState({isOpenAdmin:!isOpenAdmin})
                break;
            case 'dasboard':
                history.push('/')
                break
            case 'create_course':
                history.push('/main/create-course')
                break
            case 'create_campus':
                history.push('/main/create-campus')
                break
            case 'students':
                history.push('/main/students')
                break
        
            default:
                break;
        }

        console.log("perro",key)
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
       const {menus,user,isOpenAdmin} = this.state
       const {onLogout,onClickMenu} = this
        return(
            <div className="row-app">


                <SideBar
                    isOpenAdmin={isOpenAdmin}
                    user={user}
                    onLogout={onLogout}
                    onPress={onClickMenu}
                />
                <SubRoutes/>
            </div>
        )
    }
}


export default Main