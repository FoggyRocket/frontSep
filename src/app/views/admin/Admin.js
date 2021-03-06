import React,{Component} from 'react'
import { TextInput,Button } from '../../components'
import {campusCreateEndpoint,campusListEndpoint} from '../../services/campus-ws'
import {courseCreateEndpoint,} from '../../services/course-ws'
import {usersListEndpoint} from '../../services/user-ws'
import { Col, FormGroup, Label, Input, Table } from 'reactstrap';

class  Admin extends Component{

    state={
        data:{},
        campus:[],
        students:[]
    }

    getDataInit=()=>{
        
    Promise.all([campusListEndpoint(),usersListEndpoint()]).then(values=>{
        console.log("value",values)
        this.setState({
                campus:values[0].data.result,
                students:values[1].data.result,
            })
    })
        
    }
    componentDidMount(){
        const {match} = this.props
        this.getDataInit()
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
        const {campus,data,students} = this.state
        const {handleChange,handleSubmit} = this
        const {match} = this.props
        
        return(
            <div style={{width:'100vh',padding:10}}>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        name='name'
                        textLabel= {match.path === '/main/create-campus'? 'Campus' : 'Cursos'}
                        placeholder='Nombre campus'
                        handleChange={handleChange}
                        value = {data.name ? data.name : '' }
                    />
                    {
                        match.path === '/main/create-course' &&
                        <>
                    <FormGroup >
                    <Label for="exampleSelectMulti" sm={2}>Campus</Label>
                   
                        <Input type="select" name="_campus" id="_campus">
                        <option>Selecciona uno</option>)
                        {campus.map((item,index)=><option>{item.name}</option>)}

                        </Input>

                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelectMulti" sm={2}>Estudiante</Label>
                        <Col sm={10}>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                        {students.map((item,index)=><option>{item.name}</option>)}

                        </Input>
                        </Col>
                    </FormGroup>
                    </>
                    }
                    
                    <Button
                        text="Crear"
                    />
                </form>
                {
                        match.path === '/main/create-campu' &&
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
                }
            </div>
        )
    }
}


export default Admin