

const ListItem = ({text,Icon,onPress=()=>{},id}) =>  (
    <li onClick={()=>onPress(id)} >
        <span className="list-group-item-action nav-link text-white ">
            <Icon className='bi me-2'/>
             {text}
        </span>
    </li>
)


export default ListItem;