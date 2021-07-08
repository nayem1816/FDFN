import React from 'react';
import './ContactHeader.css';

const ContactHeader = () => {
    return (
        <div className="contact-header">
            <div className="contact-header-bg d-flex justify-content-center align-items-center">
                <div className="text-center w-50 mt-5">
                    <h2 className="display-1 color-red font-dancing">Contact Us</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;