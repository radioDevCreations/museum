import React from 'react';
import SVGLetter from '../SVGLetter/SVGLetter';
import Scene from '../Scene/Scene';
import './Slider.sass';

export interface SliderProps {
    chosenSlide: number
}

const Slider: React.SFC<SliderProps> = ({chosenSlide}) => {
    return ( 
    <div className="slider">
        <SVGLetter/>
        <Scene/>
    </div>
     );
}
 
export default Slider;