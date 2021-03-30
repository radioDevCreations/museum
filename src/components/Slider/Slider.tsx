import React from 'react';
import SVGLetter from '../SVGLetter/SVGLetter';
import Scene from '../Scene/Scene';
import SelectSlideMenu from '../SelectSlideMenu/SelectSlideMenu';
import {SelectedSlide} from '../../types/SelectedSlide';

import './Slider.sass';


const Slider = ({chosenSlide, setChosenSlide}: SelectedSlide) => {
    return ( 
    <div className="slider">
        <SVGLetter/>
        <Scene/>
        <SelectSlideMenu chosenSlide={chosenSlide} setChosenSlide={setChosenSlide}/>
    </div>
     );
}
 
export default Slider;