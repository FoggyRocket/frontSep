import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que see mostraran
import {Home} from './app/views'
//tonto 
const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={()=><h1>Estee es el login</h1>} />
        <Route exact path="/signup" component={()=><h1>Estee es el signup</h1>} />
        <Route exact path="/campus" component={()=><h1>Estee es el campus</h1>} />

    </Switch>
)

export default Routes


//Ejemplo con llave
const Ejemplo= () =>  {

    const perro = 2 + 2
    //para meter mas codigo o funcionalidad

    return(
        <div/>
    )
}