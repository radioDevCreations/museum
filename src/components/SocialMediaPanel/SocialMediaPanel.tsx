import './SocialMediaPanel.sass';

const SocialMediaPanel = () => {
    return ( 
        <div className="social-media-panel">
            <a href="https://www.facebook.com/radek.rozmus.73/" className="social-ref"><i className="icon-facebook button-icon"></i></a>
            <a href="https://www.instagram.com/radiodevcreations/" className="social-ref"><i className="icon-instagram button-icon"></i></a>
            <a href="https://github.com/radioDevCreations/museum/" className="social-ref"><i className="icon-github-squared button-icon"></i></a>
        </div>
     );
}
 
export default SocialMediaPanel;