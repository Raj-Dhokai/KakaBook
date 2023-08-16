import React from "react";
import "../App.css";

const ParallelogramItems = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="parallelogram-container">
          <h4>EXCHANGES AVAILABLE</h4>
        </div>
        <div className="parallelogram-container">
          <h4>All Types Of ID Available</h4>
        </div>
      </div>

      <div className="text-white text-center">
        <h2>DEALING TERMS</h2>
      </div>

      <div className="content">
        <div
          className="parallelogram-container space-evenly"
          style={{ backgroundColor: "#009973" }}
        >
          <p> Min Refil</p> <p>100 Points</p>
        </div>
        <div
          className="parallelogram-container space-evenly"
          style={{ backgroundColor: "#00b386" }}
        >
          <p> Min Withdrawal</p> <p>100 Points</p>
        </div>
        <div
          className="parallelogram-container space-evenly"
          style={{ backgroundColor: "#00cc99" }}
        >
          <p> Max Process Time</p> <p>30 minutes</p>
        </div>
        <div
          className="parallelogram-container space-evenly"
          style={{ backgroundColor: "#ff751a" }}
        >
          <p> Timings</p> <p>24 hours</p>
        </div>
        <div
          className="parallelogram-container space-evenly"
          style={{ backgroundColor: "#ff8533" }}
        >
         <p> Days</p> <p>365 days</p>
        </div>
        <div
          className="parallelogram-container space-evenly"
          style={{ backgroundColor: "#ff944d" }}
        >
         <p>We are a company, not a dealer</p>
        </div>
      </div>
    </div>
  );
};

export default ParallelogramItems;
