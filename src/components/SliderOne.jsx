import React from "react";

const SliderOne = () => {
  return (
    <div>
      <div
        id="textCarousel"
        className="carousel slide my-5"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1 className="carousel-text text-info text-center">Sports </h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center"> Live table casino</h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center">International Casino</h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center">Binary</h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center">Lottery </h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center">Elections </h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center">Matka </h1>
          </div>
          <div className="carousel-item">
            <h1 className="carousel-text text-info text-center">Horse Race </h1>
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

export default SliderOne;
