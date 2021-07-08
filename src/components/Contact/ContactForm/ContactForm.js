import React from 'react';

const ContactForm = () => {
    return (
        <div className='container my-5'>
            <h2 className='font-ubuntu text-center'>Send Message</h2>
            <div className="contact-form">
                <div className="">
                    <input type="text" class="form-control" placeholder="Your Name" />
                </div>
                <div className="">
                    <input type="email" class="form-control" placeholder="Your Email" />
                </div>
                <div className="">
                    <textarea class="form-control" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <input type="submit" value='Submit' />
            </div>
        </div>
    );
};

export default ContactForm;