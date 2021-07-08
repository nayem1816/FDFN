import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import AboutHeader from "../AboutHeader/AboutHeader";
import Discover from "../Discover/Discover";

const About = () => {
    return (
        <div>
            <AboutHeader />
            <Discover />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default About;
