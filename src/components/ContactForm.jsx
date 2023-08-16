import React, { useState } from "react";
import "../App.css";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleWhatsapp = () => {
    if (validateForm()) {
      const url =
        `https://wa.me/+919662973973?text=` +
        `*Name :* ${name}%0a` +
        `*Email :* ${email}%0a` +
        `*Phone :* ${phone}%0a` +
        `*Message :* ${message}`;

      window.open(url, "_blank").focus();
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone) {
      setPhoneError("Phone number is required");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <form className="mb-3 mx-3">
          <div className="container">
            <div
              className="parallelogram-container"
              style={{ backgroundColor: "#ff751a" }}
            >
              <div className="parallelogram-content d-flex justify-content-evenly">
                <h5> CONTACT US</h5>
              </div>
            </div>
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="form-control"
              required
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-control"
              required
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"
              className="form-control"
              required
            />
            {phoneError && <div className="text-danger">{phoneError}</div>}
          </div>
          <div className="form-group my-3">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="form-control"
              required
            ></textarea>
            {messageError && <div className="text-danger">{messageError}</div>}
          </div>
          <div className="form-group my-3">
            <button
              onClick={handleWhatsapp}
              className="btn btn-warning"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
