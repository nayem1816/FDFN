import { faClock, faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactDetails.css';


const ContactDetails = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-3 text-center p-3">
                    <div className="">
                        <FontAwesomeIcon className="color-red contact-icon" icon={faLocationArrow} size="lg" />
                    </div>
                    <h2 className='font-ubuntu'>Location</h2>
                    <p className='font-open-sans'>Dhaladia, Rajabari, SreePur,</p>
                    <p className='font-open-sans'>Gazipur.</p>
                </div>
                <div className="col-md-3 text-center p-3">
                    <div className="">
                        <FontAwesomeIcon className="color-red contact-icon" icon={faPhone} size="lg" />
                    </div>
                    <h2 className='font-ubuntu'>Phones</h2>
                    <p className='font-open-sans'>+8801937451649</p>
                    <p className='font-open-sans'>+8801310913326</p>
                </div>
                <div className="col-md-3 text-center p-3">
                    <div className="">
                        <FontAwesomeIcon className="color-red contact-icon" icon={faEnvelope} size="lg" />
                    </div>
                    <h2 className='font-ubuntu'>Email</h2>
                    <p className='font-open-sans'>fdfn2016@gmail.com</p>
                    <p className='font-open-sans'>fdfn2016@gmail.com</p>
                </div>
                <div className="col-md-3 text-center p-3">
                    <div className="">
                        <FontAwesomeIcon className="color-red contact-icon" icon={faClock} size="lg" />
                    </div>
                    <h2 className='font-ubuntu'>Working hours</h2>
                    <p className='font-open-sans'>Saturday - Friday</p>
                    <p className='font-open-sans'>9:00 AM - 8:00 PM</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;