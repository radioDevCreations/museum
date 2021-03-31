import './DropDownMenu.sass';

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
            <li className="drop-down-menu-item">Home</li>
            <li className="drop-down-menu-item">About</li>
            <li className="drop-down-menu-item">Contact</li>
        </ul>
     );
}
 
export default DropDownMenu;