import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section id="appointment" className="py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-12 col-lg-6">
            <div className="section-title-one">
              <h1> Request Appointment </h1>
            </div>
            <div className="appointment-form">
              <form action="mailto:rahmanmahi02@gmail.com" className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input type="text" placeholder="Phone" required />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="col-lg-12 col-12">
                  <textarea placeholder="Message" required />
                </div>
                <button
                  className="btn btn-primary w-50 shadow-none p-3 m-3"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img
              className="img-fluid w-75 mx-auto d-block mt-3 mt-lg-0"
              src="https://i.ibb.co/phqPByy/appointment-f32571dc.png"
              alt="appointment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
