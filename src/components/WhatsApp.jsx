import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "../App.css";
const WhatsApp = () => {
  return (
    <>
      <div className="fixed-whatsapp-icon">
        <a
          href="https://wa.me/+918544600600"
          target="_blank"
          className="text-decoration-none text-white"
          rel="noreferrer"
        >
          <BsWhatsapp size={30} />
        </a>
      </div>
    </>
  );
};

export default WhatsApp;
