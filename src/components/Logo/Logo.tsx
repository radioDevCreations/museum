import React from 'react';
import './Logo.sass';
import {Link} from 'react-router-dom';

const Logo = () => {
    return ( 
    <div className="logo">
        <Link to="/" className = "logo-link">
            <div className="logo-titlebold-segment">
                GREEK
            </div>
            <div className="logo-headerbold-segment">
                MUSEUM
            </div>
        </Link>
    </div>
     );
}
 
export default Logo;