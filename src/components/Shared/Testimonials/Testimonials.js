import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/testimonials")
            .then((res) => res.json())
            .then((data) => {
                setTestimonials(data);
            });
    }, []);
    return (
        <div className="my-5">
            <div className="text-center container">
                <h5 className="font-dancing color-red font-bold testimonial-title-top">
                    Testimonial
                </h5>
                <h2 className="font-ubuntu tariffs-title">Our Founder say</h2>
                <div className="row">
                    {testimonials.map((testimonial) => (
                        <div
                            style={{ margin: "40px auto" }}
                            className="col-md-4 p-3"
                        >
                            <div className="testimonial-profile rounded">
                                <img
                                    className="img-fluid testimonial-img-style"
                                    src={testimonial?.imageUrl}
                                    alt=""
                                />
                                <blockquote className="font-open-sans">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    {testimonial?.description}
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                </blockquote>
                                <h4 className="font-ubuntu">
                                    {testimonial?.testimonialName}
                                </h4>
                                <small className="font-open-sans">
                                    ({testimonial?.testimonialTitle})
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
