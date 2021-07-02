import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que see mostraran
import {Home,Auth} from './app/views'
//tonto 
const Routes = () =>  (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/campus" component={()=><h1>Estee es el campus</h1>} />
        {/* registro ssubir proyecto */}
        {/* Admin 
            estudiantes, crear campus, crear cursos,
        */}
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