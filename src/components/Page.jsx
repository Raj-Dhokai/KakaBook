import React from "react";
import Banner from "./Banner";
import SliderOne from "./SliderOne";
import Details from "./Details";
import ParallelogramItems from "./ParallelogramItems";
import SliderTwo from "./SliderTwo";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Page = () => {
  return (
    <div className="bg-dark">
      <Banner />
      <SliderOne />
      <Details />
      <ParallelogramItems />
      <SliderTwo/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Page;
