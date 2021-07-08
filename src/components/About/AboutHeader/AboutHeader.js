import React from 'react';
import './AboutHeader.css';

const AboutHeader = () => {
    return (
        <div className="about-header">
            <div className="about-header-bg d-flex justify-content-center align-items-center">
                <div className="text-center w-50 mt-5">
                    <h2 className="display-1 color-red font-dancing">About Us</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;