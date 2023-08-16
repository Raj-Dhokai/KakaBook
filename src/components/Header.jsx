import React from "react";
import img from "../assets/images/logo.png";
import "../App.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={img}
            alt="kakabook_logo"
            className="img-fluid logo bounce"
            width="100"
            height="80"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="mx-5">
            <li className="mx-5">
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end parallelogram-nav">
              <li className="nav-item px-5" style={{ marginRight: "20px" }}>
                <p className="nav-link zoom-effect">EXCHANGES</p>
              </li>
              <li className="nav-item px-5" style={{ marginRight: "20px" }}>
                <p className="nav-link zoom-effect">DEAL TERMS</p>
              </li>
              <li className="nav-item px-5" style={{ marginRight: "20px" }}>
                <p className="nav-link zoom-effect">CONTACT</p>
              </li>
              <li className="nav-item px-5">
                <a
                  className="nav-link zoom-effect"
                  href="https://wa.me/+918544600600"
                  target="_blank"
                >
                  WHAT'SAPP NUMBER
                  <div className="text-center">8544600600</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
