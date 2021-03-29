import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import Logo from '../Logo/Logo';
import './Header.sass';

const Header = () => {
    return ( 
        <header className="header">
            <Logo/>
            <MenuButton/>
        </header>
     );
}
 
export default Header;