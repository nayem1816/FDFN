import React from "react";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import ExtraFeature from "../ExtraFeature/ExtraFeature";
import HomeFeature from "../HomeFeature/HomeFeature";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeHeaderFeature from "../HomeHeaderFeature/HomeHeaderFeature";
import HomeMovies from "../HomeMovies/HomeMovies";
import TariffsPlan from "../TariffsPlan/TariffsPlan";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeHeaderFeature />
      <ExtraFeature />
      <HomeFeature />
      <TariffsPlan />
      <Testimonials />
      <HomeMovies />
    </div>
  );
};

export default Home;
