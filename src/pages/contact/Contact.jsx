import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
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
          <h3 className="contact__title">dont be shy</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            neque modi accusamus impedit hic similique corrupti minima ducimus
            earum, pa
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
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribbble.com" className="contact__social-link">
              <FaDribbble />
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

            <button className="button contact__button">
              Send message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
