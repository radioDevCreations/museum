import React, {useState} from 'react';
import './Content.sass';
import Slider from '../Slider/Slider';
import SliderNav from '../SliderNav/SliderNav';

const Content = () => {

    const [chosenSlide, setChosenSlide] = useState(1);

    return ( 
        <section className="content">
            <Slider chosenSlide={chosenSlide}/>
            <SliderNav chosenSlide={chosenSlide} setChosenSlide={setChosenSlide}/>
        </section>
     );
}
 
export default Content;