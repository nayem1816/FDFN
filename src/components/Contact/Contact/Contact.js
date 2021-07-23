/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";
import ContactHeader from "../ContactHeader/ContactHeader";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactHeader />
      <ContactDetails />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2165.545829647547!2d90.47464449147976!3d24.101514792967965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d7a4273359c9%3A0x14159aab1bb27e05!2sDhaladiya%20Market!5e0!3m2!1sen!2sbd!4v1625744461804!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
