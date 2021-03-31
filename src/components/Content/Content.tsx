import React, {useState} from 'react';
import './Content.sass';
import Slider from '../Slider/Slider';
import MenuButton from '../MenuButton/MenuButton';
import SliderNav from '../SliderNav/SliderNav';
import DropDownMenu from '../DropDownMenu/DropDownMenu';


const Content = () => {

    const [chosenSlide, setChosenSlide] = useState(1);
    const [menuDropDownend, setMenuDropDowned] = useState(false);

    return ( 
        <section className="content">
            <MenuButton isDroped = {menuDropDownend} click={() => setMenuDropDowned(!menuDropDownend)}/>
            <Slider chosenSlide={chosenSlide} setChosenSlide={setChosenSlide}/>
            <SliderNav chosenSlide={chosenSlide} setChosenSlide={setChosenSlide}/>
            <DropDownMenu isDroped={menuDropDownend}/>
            
        </section>
     );
}
 
export default Content;