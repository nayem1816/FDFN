/* eslint-disable no-unused-vars */
import React from 'react';
import { animateScroll as scroll, Link } from "react-scroll";

const StartNowBtn = () => {
    return (
        <Link
            to="interesting"
            smooth={true}
            duration={300}
            className="btn-style btn-style-danger"
        >
            Start Now
        </Link>
    );
};

export default StartNowBtn;