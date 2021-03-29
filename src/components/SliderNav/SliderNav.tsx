import React from 'react';
import './SliderNav.sass';
 
type ContentProps = {
    chosenSlide: number,
    setChosenSlide: React.Dispatch<React.SetStateAction<number>>
}

const SliderNav = ({chosenSlide, setChosenSlide}: ContentProps) => {
    
    const choose1:string = chosenSlide===1?"":"-empty"
    const choose2:string = chosenSlide===2?"":"-empty"
    const choose3:string = chosenSlide===3?"":"-empty"

    return ( 
        <div className="slider-nav">
            <div className={"chosen-slide icon-circle" + choose1} onClick={() => setChosenSlide(1)}></div>
            <div className={"chosen-slide icon-circle" + choose2} onClick={() => setChosenSlide(2)}></div>
            <div className={"chosen-slide icon-circle" + choose3} onClick={() => setChosenSlide(3)}></div>
        </div>
     );
}
 
export default SliderNav;