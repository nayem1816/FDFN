import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className='container my-5'>
            <h2 className='font-ubuntu text-center'>Send Message</h2>
            <div className="contact-form">
                <div className="p-2">
                    <input type="text input-border" class="form-control" placeholder="Your Name" />
                </div>
                <div className="p-2">
                    <input type="email input-border" class="form-control" placeholder="Your Email" />
                </div>
                <div className="p-2">
                    <textarea class="form-control text-border" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <div className="text-center">
                    <input className='submit-btn' type="submit" value='Submit' />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;