import React, { Component } from "react";
import Heading from "../../UI/Heading/Heading";
import styles from "./Contact.module.css";
import Shake from "react-reveal/Shake";
import Fade from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../axios-contact";

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
    event.target.style.border = "2px solid yellow";
    event.target.style.transition = "all 300ms";
  };

  handleInputUnFocus = (event) => {
    event.target.style.border = "1px solid gray";
    event.target.style.transition = "all 300ms";
  };

  handleSubmit = (event) => {
    if (this.state.name === "") {
      //   window.getComputedStyle(this.nameRef.current).border = "2px solid red";
      this.nameRef.current.style.border = "2px solid red";
      this.setState({ readyToSubmit: 1 });
    }
    if (this.state.email === "") {
      this.emailRef.current.style.border = "2px solid red";
      this.setState({ readyToSubmit: 1 });
    }
    if (this.state.message === "") {
      this.messageeRef.current.style.border = "2px solid red";
      this.setState({ readyToSubmit: 1 });
    }

    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== ""
    ) {
      const details = {
        "name":this.state.name,
        "email":this.state.email,
        "phone":this.state.phone,
        "message":this.state.message,
      }
      this.notifyWait();
      axios.post("/contact.json", details)
        .then(response => this.notifySuccess())
      .catch(error => this.notifyFailure())
      
    }
  };

notifyWait = () =>
    toast.info("Please Wait...", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  

  notifySuccess = () =>
    toast.success("Messege Sent 🎉🎉🎉. I'll be in touch soon!", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  notifyFailure = () =>
    toast.error("Messege not Sent. Please try again", {
      position: "top-right",
      autoClose: 10000,
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
      <div className={styles.Contact} ref={this.props.contactRef}>
        <ToastContainer />
        <Fade bottom>
          <Heading>5. Contact</Heading>
          <h2>
            It’s not too complicated. Simply reach out if you’d like to talk
            further.
          </h2>
          <h1>Let's Talk</h1>
          <div style={{ "marginBottom": "32px","paddingRight":"1rem" }}>You can also email me directly at - 
          <span className={styles.Email} onClick={() => window.open("mailto:imvarun23@gmail.com", "_self")}>
               imvarun23@gmail.com
              </span>
          </div>
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
