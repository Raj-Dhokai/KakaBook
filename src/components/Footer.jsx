import React from "react";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "rgb(34, 34, 34)" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4" style={{ marginLeft: "25px" }}>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://instagram.com/kakabook600?igshid=MzRlODBiNWFlZA=="
            role="button"
            target="_blank"
          >
            <BsInstagram size={20}/>
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://telegram.me/+918544600600"
            role="button"
            target="_blank"
          >
            <BsTelegram size={20}/>
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#27ae60" }}
            href="https://wa.me/+918544600600"
            role="button"
            target="_blank"
          >
            <BsWhatsapp size={20}/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgb(51, 51, 51)" }}
      >
        © 2023 Copyright :&nbsp;
        <a
          className="text-white text-decoration-none"
          href="https://wa.me/+918544600600"
        >
          kakabook.com
        </a>
      </div>
    </MDBFooter>
  );
}
