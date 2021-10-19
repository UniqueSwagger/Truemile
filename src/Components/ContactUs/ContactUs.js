/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <section className="contact-info-map-area">
        <div className="container">
          <div className="sec-title max-width text-center mb-4">
            <h1>We are Here to Help You, Don’t Hesitate.</h1>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-info-map p-lg-5 p-2">
                <div className="row">
                  <div className="col-xl-4 ">
                    <div className="contact-info-left">
                      <div className="contact-title">
                        <h2>Send Your Message To Us</h2>
                        <p>
                          Dont be shy, Send your message through phone or form,
                          our expert will help you ASAP. Moreover you can take
                          an appointment also
                        </p>
                      </div>
                      <div className="state-select-box-2">
                        <div className="state-content">
                          <div>
                            <ul className="ps-0">
                              <li>
                                <div className="text">
                                  <h5>Manager Address</h5>
                                  <p>
                                    Taher Villa
                                    <br /> 115/1 North Kalimabad,Moulvibazar
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <h5>Phone</h5>
                                  <p>
                                    Phone 1 : 01731248533
                                    <br /> Phone 2 : 01628987052
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <h5>Email</h5>
                                  <p>rahmanmahi02@gmail.com</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="google-map-box">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.120846534074!2d91.77378241447002!3d24.48126936638047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751755ba231ef43%3A0xf48ef1a00f115bb4!2sTaher%20Villa!5e0!3m2!1sen!2sbd!4v1634641927798!5m2!1sen!2sbd"
                        width="670"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form
        action="mailto:rahmanmahi02@gmail.com"
        className="container bg-primary py-5 mb-5"
        style={{ borderRadius: "35px" }}
      >
        <div className="row">
          <h2 className="text-center">We'd love to hear from you!</h2>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <input
              type="submit"
              value="Send Message"
              className="btn submit-btn"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
