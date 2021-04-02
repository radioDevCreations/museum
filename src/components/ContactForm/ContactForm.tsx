import * as React from 'react';
import { Component } from 'react';
import './ContactForm.sass';

 
export interface Props {
    
}
 
export interface State {
    
}
 
class ContactForm extends Component<Props, State> {
    render() { 
        return (  
            <form className="contact-form">
                <input type="email" placeholder="Your email" id="user-email" className="form-input"/>
                <input type="text" placeholder="Your name" id="user-name" className="form-input"/>
                <input type="text" placeholder="Subject..." id="subject" className="form-input"/>
                <input type="text" placeholder="Message..." id="message" className="form-input"/>
            </form>
        );
    }
}
 
export default ContactForm;