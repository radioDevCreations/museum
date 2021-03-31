import React from 'react';
import './MenuButton.sass'
import '../../fontello/css/fontello.css'


export interface MenuButtonProps {
    isDroped: boolean,
    click: () => void
}

const MenuButton: React.SFC<MenuButtonProps>  = (props) => {

    const styleClass:string =
    props.isDroped?
    "menu-button close":
    "menu-button open"

    return ( 
                <button className={styleClass} onClick = {props.click}></button>
    );
}
 
export default MenuButton;