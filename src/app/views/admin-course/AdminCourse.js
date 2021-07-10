import React,{Component} from 'react'
import { TextInput,Button } from '../../components'
import {campusListEndpoint} from '../../services/campus-ws'
import {courseCreateEndpoint,cou} from '../../services/course-ws'

import { Table } from 'reactstrap';

class  Admin extends Component{

    state={
        data:{},
        campus:[],
    }


    componentDidMount(){
        const {match} = this.props
        campusListEndpoint()
        .then(res=>{
            console.log("")
            this.setState({campus:res.data.result})
        })
        .catch(error=>{
            console.log("console.llog",error)
        })
    }
    handleChange=(e)=>{
        let  {data} = this.state
         const {name,value} = e.target
         //para editar el state this.setState({})
         //a)
         // this.setState({  user:{ ...user,[name]:value }      })
         //b)
         data[name]=value
         this.setState({ data })
     }

     handleSubmit=(e)=>{
        let  {data,campus} = this.state

        e.preventDefault()
        campusCreateEndpoint(data)
        .then(res=>{
            console.log("la respuesta",res)
            campus = [...campus,res.data.result]
            this.setState({  campus , data:{} })
        })
        .catch(error=>{
            console.log("console.llog",error)
        })
     }


    render(){
        const {campus,data,} = this.state
        const {handleChange,handleSubmit} = this
        console.log("campussssss",campus)
        return(
            <div style={{width:'100vh',padding:10}}>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        name='name'
                        textLabel= 'Campus'
                        placeholder='Nombre campus'
                        handleChange={handleChange}
                        value = {data.name ? data.name : '' }
                    />
                    <Button
                        text="Crear"
                    />
                </form>
                <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre Campus</th>
                    <th>Fecha creacion </th>
                    </tr>
                </thead>
                <tbody>
                   { campus.map((item,index)=>(
                   <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.createdAt}</td>
                    </tr>
                    ))}
                   
                </tbody>
                </Table>
            </div>
        )
    }
}


export default Admin