import {Link} from 'react-router-dom';
import { Star,Arrow90degDown,Bootstrap,House,Speaker,Table } from 'bootstrap-icons-react';
import ListItem from './ListItem';
import { UncontrolledCollapse, Button, Collapse, Card } from 'reactstrap';

const SideBar = ({user,onLogout,isOpenAdmin,onPress}) => (

    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280,height:'100vh'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Iron Projects</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <ListItem
        text='Dasboard'
        id='dasboard'
        Icon ={Bootstrap}
        onPress={onPress}
      />
      {user.role  === 'USER' && 
      <>
      <ListItem
        text='Mis proyectos'
        id='my_projects'
        onPress={onPress}
        Icon ={Bootstrap}
      />
      
      <ListItem
        text='Mi curso'
        id='my_course'
        Icon ={Bootstrap}
        onPress={onPress}
      />
      </>}
      <ListItem
        text='Admin'
        id='admin'
        Icon ={Bootstrap}
        onPress={onPress}
      />
      <Collapse isOpen={isOpenAdmin}>
        <ListItem
          text='Crear curso'
          id='create_course'
          Icon ={Bootstrap}
          onPress={onPress}
        />
        <ListItem
          text='Crear campus'
          id='create_campus'
          onPress={onPress}
          Icon ={Bootstrap}
        />
        <ListItem
          text='Estudiates'
          id='students'
          Icon ={Bootstrap}
          onPress={onPress}
        />
      </Collapse>
     

      

      <li onClick={()=>onLogout()}>
        <span className="nav-link text-white">
            <Bootstrap className='bi me-2'/>
          Logout
        </span>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>{user.name}</strong>

      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
)

export default SideBar

//bi me-2