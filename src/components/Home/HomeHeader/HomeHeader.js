import React from "react";
import "./HomeHeader.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Link } from "react-router-dom";
import StartNowBtn from "./StartNowBtn";

SwiperCore.use([Autoplay, Navigation]);

const sliderImage = [
  {
    id: 1,
    image: "https://i.ibb.co/2trHBkW/business-people-using-internet-2.jpg",
    head1: "Your Favorite",
    head2: "Shows and Movies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum magnam numquam iusto, nisi voluptates.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/zRjQQnR/businessman-checking-his-phone-3.jpg",
    head1: "Your Favorite",
    head2: "Shows and Movies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum magnam numquam iusto, nisi voluptates.",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co/VxYMPcK/futuristic-smart-city-with-5g-global-network-technology-2.jpg",
    head1: "Your Favorite",
    head2: "Shows and Movies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum magnam numquam iusto, nisi voluptates.",
  },
  {
    id: 4,
    image: "https://i.ibb.co/SQBzLkJ/friends-social-media-2.jpg",
    head1: "Your Favorite",
    head2: "Shows and Movies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum magnam numquam iusto, nisi voluptates.",
  },
];

const HomeHeader = ({ passInteresting }) => {
  return (
    <div className="home-header-style">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        className="mySwiper home-header-slider"
      >
        {sliderImage.map((sliderImg) => (
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${sliderImg.image})` }}
              className="slider-images"
            >
              <div className="slider-bg-style d-flex align-items-center">
                <div className="text-white container slider-text-part text-center">
                  <h1 className="text-head1">{sliderImg.head1}</h1>
                  <h2 className="text-head2">{sliderImg.head2}</h2>
                  <p className="text-white text-description px-5">
                    {sliderImg.description}
                  </p>
                  <div className="button">
                    <Link to="/about" className="btn-style btn-style-warning">
                      Read More
                    </Link>
                    <StartNowBtn />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeader;
