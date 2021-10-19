import React from "react";
import "./WelcomeSection.css";
import CountUp from "react-countup";
import banner1 from "../../images/about-banner1.png";
import banner2 from "../../images/about-banner2.png";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="about-us-one-left">
            <img src={banner1} alt="teeth" />
            <img src={banner2} alt="teeth" className="about-animate" />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="about-us-one-right mt-5 mt-lg-0">
            <div className="about-heading">
              <h1> Welcome to a Family </h1>
            </div>
            <p>
              Welcome to Trusmile represents everything going to dentist
              necessary.We have upgraded your dreaded dentist appointment and
              transformed it into a relaxing.
            </p>
            <Link to="/about-us" className="btn-link text-decoration-none">
              About Us
            </Link>
            <div className="fun-fact-section ">
              <div className="single-fun-fact-one">
                <span>
                  <CountUp end={500} duration={3.75} />
                </span>
                <p> Happy Patients </p>
              </div>
              <div className="single-fun-fact-one sp-fun">
                <span>
                  <CountUp end={88} duration={2.75} />
                </span>
                <p> Qualified Doctors </p>
              </div>
              <div className="single-fun-fact-one">
                <span>
                  <CountUp end={25} duration={3.75} />
                </span>
                <p> Years Experience </p>
              </div>
              <div className="single-fun-fact-one sp-fun">
                <span>
                  <CountUp end={55} duration={3.75} />
                </span>
                <p> Dental Awards </p>
              </div>
              <span className="line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
