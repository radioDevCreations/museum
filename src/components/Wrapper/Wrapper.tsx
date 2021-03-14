import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import './Wrapper.sass';

const Wrapper = () => {
    return ( 
        <div className="wrapper">
            <Header/>
            <Content/>
        </div>
     );
}
 
export default Wrapper;