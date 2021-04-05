import {useState} from 'react';
import './Content.sass';
import Slider from '../Slider/Slider';
import MenuButton from '../MenuButton/MenuButton';
import SliderNav from '../SliderNav/SliderNav';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import ContactForm from '../ContactForm/ContactForm';
import AboutPage from '../AboutPage/AboutPage';
import {Route} from 'react-router-dom';


const Content = () => {

    const [chosenSlide, setChosenSlide] = useState(1);
    const [menuDropDownend, setMenuDropDowned] = useState(false);

    return ( 
        <section className="content">
            <MenuButton isDroped = {menuDropDownend} click={() => setMenuDropDowned(!menuDropDownend)}/>
            <DropDownMenu isDroped={menuDropDownend}/>
            <Route path="/" exact>
                <Slider chosenSlide={chosenSlide} setChosenSlide={setChosenSlide}/>
                <SliderNav chosenSlide={chosenSlide} setChosenSlide={setChosenSlide}/>
            </Route>
            <Route path="/about" component={AboutPage} exact/>
            <Route path="/contact" component={ContactForm} exact/>
        </section>
     );
}
 
export default Content;