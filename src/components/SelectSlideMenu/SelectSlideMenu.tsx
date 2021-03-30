import './SelectSlideMenu.sass';
import {SelectedSlide} from '../../types/SelectedSlide';

const SelectSlideMenu = ({chosenSlide, setChosenSlide}: SelectedSlide) => {
    
    const chosen = chosenSlide;
    let buttonsDisabled: boolean[] = [];

    switch(chosenSlide){


        case 1:
            buttonsDisabled[0] = true;
            buttonsDisabled[1] = false;
            break;
        case 2:
            buttonsDisabled[0] = false;
            buttonsDisabled[1] = false;
            break;
        case 3:
            buttonsDisabled[0] = false;
            buttonsDisabled[1] = true;
            break;
    }
    return ( 
        <nav className="select-slide-menu">
            <button className="nav-arrow-button" disabled={buttonsDisabled[0]} onClick={() => setChosenSlide(chosen-1)}>
            <i className="icon-left-open"></i>
            </button>
            <button className="nav-arrow-button" disabled={buttonsDisabled[1]} onClick={() => setChosenSlide(chosen+1)}>
            <i className="icon-right-open"></i>
            </button>
        </nav>
     );
}
 
export default SelectSlideMenu;