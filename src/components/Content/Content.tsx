import React from 'react';
import './Content.sass';
import Slider from '../Slider/Slider';
import SliderNav from '../SliderNav/SliderNav';


 
const Content = () => {
    return ( 
        <section className="content">
            <Slider/>
            <SliderNav/>
        </section>
     );
}
 
export default Content;