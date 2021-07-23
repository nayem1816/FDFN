import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import ExtraFeature from "../ExtraFeature/ExtraFeature";
import HomeFeature from "../HomeFeature/HomeFeature";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeHeaderFeature from "../HomeHeaderFeature/HomeHeaderFeature";
import HomeMovies from "../HomeMovies/HomeMovies";
import OnlineStore from "../OnlineStore/OnlineStore";
import TariffsPlan from "../TariffsPlan/TariffsPlan";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHeader />
      <HomeHeaderFeature />
      <ExtraFeature />
      <HomeFeature />
      <TariffsPlan />
      <Testimonials />
      <HomeMovies />
      <OnlineStore />
      <Footer />
    </div>
  );
};

export default Home;
