import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Treatments.css";

const Treatments = () => {
  const treatments = useFetch(`treatments.json`);
  return (
    <section
      className=" py-3"
      style={{ background: "#004caa", margin: "100px 0" }}
    >
      <div className="container py-4 text-white">
        <h2 className="text-center fw-bold my-3">Treatments</h2>
        <div className="row">
          {treatments.map((item) => {
            const { id, imgUrl, title, text } = item;
            return (
              <div className="col-md-6 col-12 col-lg-6 col-xl-4 my-4" key={id}>
                <div className="single-service-box p-3 h-100 ">
                  <div className="service-icon">
                    <img src={imgUrl} alt={title} />
                  </div>
                  <h3> {title} </h3>
                  <p> {text} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
