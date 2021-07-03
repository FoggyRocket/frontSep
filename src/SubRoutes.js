import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que see mostraran
import {Home,Auth} from './app/views'
//tonto 
const SubRoutes = () =>  (
    <Switch>
        <Route  path="/" component={()=><h1>Holaa este es / en SSUB</h1>} />

        {/* para el admin */}
        <Route  path="/main/list" component={()=><h1>Estas seran listas</h1>} />
        <Route  path="/main/create-course" component={()=><h1>Estee es el campus</h1>} />
        {/*USEER  */}
        <Route  path="/main/create-project" component={()=><h1>Estee es el campus</h1>} />
        
    </Switch>
)

export default SubRoutes
