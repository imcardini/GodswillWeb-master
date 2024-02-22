import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Let's Connect</h3>
          <p className="contact__description">
            Ready to take the next step? Reach out to me directly! Whether you
            have inquiries about our services or just want to say hello, I'm all
            ears. Drop me a message, and let's get the conversation going.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title"> mail me</span>
                <h4 className="info__desc"> petergodswill1100@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title"> call me</span>
                <h4 className="info__desc"> 09153254081</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100090354035161"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            {/* <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a> */}
            {/* <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a> */}
            <a href="https://dribbble.com" className="contact__social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="number"
                placeholder="Your Phone Number"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your message"
              className="form__control textarea"
            ></textarea>
          </div>
          <a href="#">
            <button className="button contact__button">
              Send message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
