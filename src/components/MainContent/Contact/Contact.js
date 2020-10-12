import React, { Component } from "react";
import Heading from "../../UI/Heading/Heading";
import styles from "./Contact.module.css";
import Shake from "react-reveal/Shake";
import Fade from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      readyToSubmit: 0,
    };
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.messageeRef = React.createRef();
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };
  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleInputFocus = (event) => {
    event.target.style.border = "1px solid blue";
    event.target.style.transition = "all 300ms";
  };

  handleInputUnFocus = (event) => {
    event.target.style.border = "1px solid gray";
    event.target.style.transition = "all 300ms";
  };

  handleSubmit = (event) => {
    if (this.state.name === "") {
      //   window.getComputedStyle(this.nameRef.current).border = "2px solid red";
      this.nameRef.current.style.border = "1px solid red";
      this.setState({ readyToSubmit: 1 });
    }
    if (this.state.email === "") {
      this.emailRef.current.style.border = "1px solid red";
      this.setState({ readyToSubmit: 1 });
    }
    if (this.state.message === "") {
      this.messageeRef.current.style.border = "1px solid red";
      this.setState({ readyToSubmit: 1 });
    }

    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== ""
    ) {
      this.notify();
    }
  };

  notify = () =>
    toast.dark("🦄 Please Wait", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  render() {
    const button = (
      <div
        onClick={this.handleSubmit}
        className={styles.Shoot}
        onAnimationEnd={() => {
          this.setState({ readyToSubmit: 0 });
        }}
      >
        Shoot Message
      </div>
    );

    let shootButton;
    console.log(this.state.readyToSubmit);
    if (this.state.readyToSubmit === 0) {
      shootButton = button;
    } else {
      shootButton = <Shake>{button}</Shake>;
    }
    return (
      <div className={styles.Contact}>
        <ToastContainer />
        <Fade bottom>
          <Heading>Contact</Heading>
          <h2>
            It’s not too complicated. Simply reach out if you’d like to talk
            further.
          </h2>
          <h1>Let's Talk</h1>
          <h4>You can also email me directly at imvarun23@gmail.com</h4>
          <form>
            <div className={styles.FormContainer}>
              <div className={styles.FormNEP}>
                <input
                  ref={this.nameRef}
                  type="text"
                  id="name"
                  placeholder="Name *"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputUnFocus}
                />

                <input
                  ref={this.emailRef}
                  type="email"
                  id="email"
                  placeholder="Email Address *"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputUnFocus}
                />

                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputUnFocus}
                />
              </div>
              <textarea
                ref={this.messageeRef}
                rows={6}
                value={this.state.message}
                placeholder="Start that typing..."
                onChange={this.handleMessageChange}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputUnFocus}
              />
            </div>
            {shootButton}
          </form>
        </Fade>
      </div>
    );
  }
}
export default Contact;
