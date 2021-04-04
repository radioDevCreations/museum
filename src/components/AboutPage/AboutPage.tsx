import "./AboutPage.sass";
import SocialMediaPanel from '../SocialMediaPanel/SocialMediaPanel';

const AboutPage = () => {
  return (
    <div className="page">
      <div className="about-page">
        <h1 className="about-page-title">Our Mission</h1>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
          tortor sed turpis ultrices commodo. Quisque risus ex, tempor dapibus
          dolor hendrerit, tempor auctor risus. Sed tempor est sed turpis
          laoreet, a pretium dolor tristique. Suspendisse leo erat, suscipit ac
          varius nec, porta at diam. Donec vitae ultrices magna. Cras tortor
          enim, eleifend eu magna semper, interdum semper justo. Sed non orci
          vitae purus sollicitudin tincidunt auctor sed tortor. Nulla diam
          nulla, pulvinar placerat suscipit id, maximus eu orci.
        </p>
      </div>

      <div className="dark-part">
        <div className="about-page lowerer">
          <h1 className="about-page-title">Our Story</h1>
          <p className="about-paragraph">
            Cras eu libero porttitor, semper erat sit amet, posuere eros. Mauris
            dictum, tellus eget vehicula accumsan, mauris ex pellentesque eros,
            ac pellentesque sapien turpis sed eros. Donec a sollicitudin enim,
            sit amet tempor augue. Sed non iaculis dui. Cras pulvinar eget metus
            eu mollis. Nulla at quam gravida, condimentum orci eu, congue
            ligula. Integer sed eleifend tellus, vitae placerat arcu. Fusce vel
            sodales libero. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut quis quam commodo, tincidunt urna quis, eleifend sem. Nulla
            ultrices a lacus at mattis. Nam ullamcorper gravida interdum. Donec
            at rutrum ligula, vitae molestie erat. Duis quis ligula et ipsum
            hendrerit vestibulum ac et sapien. Suspendisse et metus ac neque
            volutpat vehicula.
          </p>
        </div>
      </div>
      <SocialMediaPanel about = {true}/>
      <footer className="about-page-footer">
          &copy; 2020 Created by Radek Rozmus
      </footer>
    </div>
  );
};

export default AboutPage;
