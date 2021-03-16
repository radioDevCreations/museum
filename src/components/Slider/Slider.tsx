import React from 'react';
import SceneBackground from '../SceneBackground/SceneBackground';
import './Slider.sass';

export interface SliderProps {
    chosenSlide: number
}

const Slider: React.SFC<SliderProps> = ({chosenSlide}) => {
    return ( 
    <div className="slider">
        <SceneBackground/>
    </div>
     );
}
 
export default Slider;