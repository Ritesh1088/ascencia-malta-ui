import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO IMAGE SECTION */}
      <section className="contact-hero-image">
        <img src="/images/contactus.jpg" alt="Contact Us" />

        <div className="contact-hero-text">
          <h2>Contact Us</h2>
        </div>
      </section>

      {/* PARAGRAPH BELOW IMAGE */}
      <section className="contact-intro">
        
        <p>
          For any question related to our campus, our programs or any other subject
          concerning Ascencia Malta, please fill in the form below.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section">
        <form className="contact-form">

          <div className="form-row">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="E-mail*" required />

            <PhoneInput
              country={"in"}
              enableSearch={true}
              inputClass="phone-input"
              containerClass="phone-container"
            />
          </div>

          <input type="text" placeholder="Subject of your message*" required />

          <textarea
            rows="6"
            placeholder="Your message*"
            required
          ></textarea>

          <div className="checkbox">
            <input type="checkbox" required />
            <span>
              I agree that Ascencia Malta collects and uses the personal data
              entered in this form according to the data protection policy.
            </span>
          </div>

          <button type="submit">SUBMIT</button>

        </form>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <iframe
          title="Mumbai Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.588191839751!2d72.86714871485732!3d19.118184687127303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b68d3b4053b7%3A0xa880ad0c01078ad4!2sChandak%20Chambers%2C%20503%2C%20Opp.%20Gurudwara%20Juhu%20Circle%2C%20Gurunanak%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400069!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* SCROLL TOP */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </div>
  );
};

export default Contact;