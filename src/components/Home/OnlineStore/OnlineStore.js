import React, { useEffect, useState } from "react";
import "./OnlineStore.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Autoplay, Navigation]);

const OnlineStore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const mainProduct = products.concat().reverse();

    return (
        <div className="full-online-movies">
            <div className="container">
                <div className="text-center">
                    <h5 className="store-title-top font-dancing color-red font-bold">
                        Online Store
                    </h5>
                    <h2 className="store-title font-ubuntu">Popular Devices</h2>
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
                    className="mySwiper online-store-slider"
                >
                    {mainProduct.map((product) => (
                        <SwiperSlide className="online-slider shadow-sm p-1">
                            <div className="text-center rounded p-3">
                                <Link to="">
                                    <img
                                        className="img-fluid"
                                        src={product.imageUrl}
                                        alt=""
                                    />
                                </Link>
                                <Link
                                    className="product-name font-ubuntu"
                                    to={`/product/${product._id}`}
                                >
                                    <h5>
                                        {product.productName.slice(0, 30)}...
                                    </h5>
                                </Link>
                                <p className="font-open-sans">
                                    {product.description}
                                </p>
                                <h5 className="d-flex justify-content-center mb-4 font-ubuntu">
                                    TK
                                    <span className="d-flex align-items-center ms-1">
                                        {product.productPrice}
                                    </span>
                                </h5>
                                <Link
                                    to={`/buyProducts/${product._id}`}
                                    className="online-store-cart-btn font-ubuntu"
                                >
                                    <FontAwesomeIcon
                                        className="me-1"
                                        icon={faCartPlus}
                                    />
                                    Buy Now
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OnlineStore;
