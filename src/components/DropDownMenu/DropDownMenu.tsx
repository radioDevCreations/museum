import './DropDownMenu.sass';
import {Link} from 'react-router-dom';

export interface DropDownMenuProps {
    isDroped: boolean
}

const DropDownMenu: React.SFC<DropDownMenuProps> = (props) => {

    const stateClass: string = 
    props.isDroped?
    "drop-down-menu":
    "drop-down-menu drop-down-menu-hide"

    return ( 
        <ul className={stateClass}>
            <li className="drop-down-menu-item"><Link className = "drop-down-menu-item-link" to="/">Home</Link></li>
            <li className="drop-down-menu-item"><Link className = "drop-down-menu-item-link" to="/about">About</Link></li>
            <li className="drop-down-menu-item"><Link className = "drop-down-menu-item-link" to="/contact">Contact</Link></li>
        </ul>
     );
}
 
export default DropDownMenu;