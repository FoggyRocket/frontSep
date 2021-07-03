import React, {Component} from 'react';
import './styles.css'
import {SideBar,Modal} from '../../components'
import SubRoutes from '../../../SubRoutes';
class Main extends Component{

    state={
        menus:[
            {
                name:'Princpal',
                onPress : ()=> this.onClickMenu()
            },
            
            {
                name:'Cerrar sesion',
                onPress : ()=> this.onClickMenu()
            }
         ]
    }

    componentDidMount(){
        let {menus} = this.state
            menus=[
                ...menus, {
                name:'Lista de usuarios',
                onPress : ()=> this.onClickMenu()
            },
            {
                name:'Crear curso',
                onPress : ()=> this.onClickMenu()
            },
            {
                name:'Crer Campus',
                onPress : ()=> this.onClickMenu()
            },
        ]
         this.setState({ menus})
    }


    onClickMenu = () => {

    }
    render(){
       const {menus} = this.state
        return(
            <div className="row-app">


                <SideBar
                    menus={menus}
                />
                <SubRoutes/>
            </div>
        )
    }
}


export default Main