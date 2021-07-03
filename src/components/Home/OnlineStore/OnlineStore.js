import React, { useEffect, useState } from "react";
import onlineStore from "../../../AllData/OnlineStore/OnlineStore.json";
import "./OnlineStore.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
// import { Icon } from "@iconify/react";
// import currencyBdt from "@iconify-icons/mdi/currency-bdt";

SwiperCore.use([Autoplay, Navigation]);

const OnlineStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(onlineStore);
  }, []);
  return (
    <div className="my-5 container">
      <div className="text-center">
        <p>Online Store</p>
        <h2>Popular Devices</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide className="online-slider p-1">
            <div className="text-center rounded border p-3">
              <Link to="">
                <img className="img-fluid" src={product.productImage} alt="" />
              </Link>
              <Link to="">
                <h4>{product.productName.slice(0, 30)}...</h4>
              </Link>
              <p>{product.description}</p>
              <h5 className="d-flex justify-content-center">
                Price:{" "}
                <span className="d-flex align-items-center">
                  {product.price} Taka
                  {/* <Icon icon={currencyBdt} /> */}
                </span>
              </h5>
              <button className="btn btn-danger">Add to cart</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OnlineStore;
