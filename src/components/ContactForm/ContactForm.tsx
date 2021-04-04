import * as React from "react";
import { Component } from "react";
import "./ContactForm.sass";
import SocialMediaPanel from '../SocialMediaPanel/SocialMediaPanel';

export interface Props {}

export interface State {
  email: string;
  name: string;
  subject: string;
  message: string;
  isError: boolean,
  errorMessage: string
};

class ContactForm extends Component<Props, State> {
  state = {
    email: "",
    name: "",
    subject: "",
    message: "",
    isError: false,
    errorMessage: ""
  };

  errorMessages = {
    email: "Email is incorrect",
    name: "Name field cannot be empty",
    subject: "Subject field cannot be empty",
    message: "Message field cannot be empty"
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as string;
    const value = e.target.value as string;
    switch (name) {
      case "email":
        this.setState({
          email: value,
        });
        break;
      case "name":
        this.setState({
          name: value,
        });
        break;
      case "subject":
        this.setState({
          subject: value,
        });
        break;
    }
  }
  handleWriteMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value as string;
    this.setState({
      message: value,
    });
  }
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.validateData();
    if(this.state.isError)
    {
      console.log("Błąd")
    }
    else
    {
    console.log("Wysłano");
    }
  }
  validateData = () => {
    if(
      this.state.email === "" ||
      !this.state.email.includes('@') ||
      this.state.email.lastIndexOf('@') >= this.state.email.length-1
      )
    {
      this.setState({
        isError: true,
        errorMessage: this.errorMessages.email
      })
    }
    else if(this.state.name === "")
    {
      this.setState({
        isError: true,
        errorMessage: this.errorMessages.name
      })
    }
    else if(this.state.subject === "")
    {
      this.setState({
        isError: true,
        errorMessage: this.errorMessages.subject
      })
    }
    else if(this.state.message === "")
    {
      this.setState({
        isError: true,
        errorMessage: this.errorMessages.message
      })
    }
    else
    {
      this.setState({
        email: "",
        name: "",
        subject: "",
        message: "",
        isError: false,
        errorMessage: ""
      })
    }
  }

  render() {

    return (
      <>
      <form className="contact-form" onSubmit={this.handleSubmit} noValidate>
        <div className="form-label">Contact us!</div>

        <input
          type="email"
          placeholder="Your email"
          id="user-email"
          name = "email"
          className="form-input"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <input
          type="text"
          placeholder="Your name"
          id="user-name"
          name = "name"
          className="form-input"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <input
          type="text"
          placeholder="Subject..."
          id="subject"
          name = "subject"
          className="form-input"
          onChange={this.handleChange}
          value={this.state.subject}
        />

        <textarea
          placeholder="Message..."
          id="message"
          name = "message"
          className="form-input"
          onChange={this.handleWriteMessage}
          value={this.state.message}
        />

        <div className="error-message" style = {{visibility: this.state.isError?"visible":"hidden"}}>
            {this.state.errorMessage}
        </div>

        <input 
        type="submit" 
        value="Send" 
        className="send-message-button" 
        />
      </form>
      <SocialMediaPanel about = {false}/>
      </>
    );
  }
}

export default ContactForm;
