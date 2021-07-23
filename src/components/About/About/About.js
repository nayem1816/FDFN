import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import AboutHeader from "../AboutHeader/AboutHeader";
import Discover from "../Discover/Discover";

const About = () => {
  return (
    <div>
      <Header />
      <AboutHeader />
      <Discover />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
