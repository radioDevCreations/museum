import React from 'react';
import SVGLetter from '../SVGLetter/SVGLetter';
import './Slider.sass';

export interface SliderProps {
    chosenSlide: number
}

const Slider: React.SFC<SliderProps> = ({chosenSlide}) => {
    return ( 
    <div className="slider">
        <SVGLetter/>
    </div>
     );
}
 
export default Slider;