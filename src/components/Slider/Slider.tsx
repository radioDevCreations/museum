import SVGLetter from "../SVGLetter/SVGLetter";
import Scene from "../Scene/Scene";
import SelectSlideMenu from "../SelectSlideMenu/SelectSlideMenu";
import SocialMediaPanel from "../SocialMediaPanel/SocialMediaPanel";
import { SelectedSlide } from "../../types/SelectedSlide";
import medusa from "./slides/medusa";
import sculpture from "./slides/sculpture";
import david from "./slides/david";
import "./Slider.sass";

const Slider = ({ chosenSlide, setChosenSlide }: SelectedSlide) => {
  let path: string;
  switch (chosenSlide) {
    case 1:
      path = medusa.imgPath;
      break;
    case 2:
      path = sculpture.imgPath;
      break;
    case 3:
      path = david.imgPath;
      break;
    default:
      path = medusa.imgPath;
      break;
  }
  return (
    <div className="slider">
      <SVGLetter />
      <Scene path = {path}/>
      <SelectSlideMenu
        chosenSlide={chosenSlide}
        setChosenSlide={setChosenSlide}
      />
      <SocialMediaPanel about={false} />
    </div>
  );
};

export default Slider;
