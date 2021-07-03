import {Link} from 'react-router-dom';

const SideBar = ({menus = [0,1,2,3]}) => (

    <ul className="list-group">
        {
            menus.map( (menu,index_c)=> (
                <li key={index_c} className="list-group-item list-group-item-action">
                        {menu.name}
                </li>
            )
        )
    }
        
    </ul>

)

export default SideBar