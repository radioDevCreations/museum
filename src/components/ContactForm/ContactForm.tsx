import * as React from "react";
import { Component } from "react";
import "./ContactForm.sass";

export interface Props {}

export interface State {
  email: string;
  name: string;
  subject: string;
  message: string;
}

class ContactForm extends Component<Props, State> {
  state = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };

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
  };
  handleWriteMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value as string;
    this.setState({
      message: value,
    });
  };

  render() {
    return (
      <form className="contact-form">
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

        <input type="submit" value="Send" className="send-message-button" />
      </form>
    );
  }
}

export default ContactForm;
