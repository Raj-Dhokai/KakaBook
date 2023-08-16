import React from "react";
import Bank from "../assets/images/small-bank.png";
import Gpay from "../assets/images/small-gplay.png";
import Paytm from "../assets/images/small-paytm.png";
import Phonepay from "../assets/images/small-phonepe.png";
const SliderTwo = () => {
  return (
    <div>
      <h2 className="text-white text-center">PAYMENT WE ACCEPT</h2>
      <div
        id="textCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="carousel-text text-center">
              <img src={Bank} alt="" /> <img src={Gpay} alt="" />{" "}
              <img src={Paytm} alt="" />
              <img src={Phonepay} alt="" />
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="carousel-text text-center">
              {" "}
              <img src={Bank} alt="" /> <img src={Gpay} alt="" />{" "}
              <img src={Paytm} alt="" />
              <img src={Phonepay} alt="" />
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="carousel-text text-center">
              <img src={Bank} alt="" /> <img src={Gpay} alt="" />{" "}
              <img src={Paytm} alt="" />
              <img src={Phonepay} alt="" />
            </h2>
          </div>
          <div className="carousel-item">
            <h2 className="carousel-text text-center">
              <img src={Bank} alt="" /> <img src={Gpay} alt="" />{" "}
              <img src={Paytm} alt="" />
              <img src={Phonepay} alt="" />
            </h2>
          </div>
        </div>
        {/* <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#textCarousel"
  data-bs-slide="prev"
>
  <span
    className="carousel-control-prev-icon"
    aria-hidden="true"
  ></span>
  <span className="visually-hidden">Previous</span>
</button>
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#textCarousel"
  data-bs-slide="next"
>
  <span
    className="carousel-control-next-icon"
    aria-hidden="true"
  ></span>
  <span className="visually-hidden">Next</span>
</button> */}
      </div>
    </div>
  );
};

export default SliderTwo;
