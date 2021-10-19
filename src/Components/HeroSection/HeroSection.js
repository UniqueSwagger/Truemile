import React from "react";
import womanBrush from "../../images/heroImage/woman-brush.png";
import doctorFinding from "../../images/heroImage/doctorfinding.png";
import heroTeeth from "../../images/heroImage/hero-teeth.png";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero mx-3 text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-10">
            <div className="hero-slide-left">
              <h2> Better Life Through </h2> <h1> Better Dentistry </h1>
              <p>
                Join us to a fun and friendly dental environment.Our
                professionals are working so hard to see smile on your face that
                you deserve!We are dedicated about our duties.
              </p>
              <a href="#appointment" className="theme-btn fill-btn">
                Appointment
              </a>
              <Link to="/about-us" className="theme-btn btn_black mb-5 mb-lg-0">
                About Us
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-12 col-md-10 offset-md-2 offset-lg-0">
            <div className="hero-slide-right">
              <div className="animate-img">
                <img className="img-1" src={womanBrush} alt="woman brush" />
                <img
                  className="img-2"
                  src={doctorFinding}
                  alt="doctor finding"
                />
              </div>
              <img src={heroTeeth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
