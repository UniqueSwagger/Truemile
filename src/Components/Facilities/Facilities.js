import React from "react";
import prfImage from "../../images/prf.png";
import compositeOrMercuryImage from "../../images/composite-mercury.png";
import bg1 from "../../images/video-bg1.jpg";
import bg2 from "../../images/video-bg2.jpg";
import "./Facilities.css";

const Facilities = () => {
  return (
    <div className="my-5">
      <section className="container my-5 pb-5">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 col-12">
            <div>
              <h2 className="fw-bold"> PRF For Faster Healing </h2>
              <div className="text-muted">
                <p>
                  Platelet Rich Fibrin (PRF) can be incorporated into just about
                  every oral surgery procedure: wisdom teeth, tooth extractions,
                  implants, bone grafts, and sinus lifts. Using PRF speeds up
                  how quickly the surgical site heals by stimulating the body to
                  accelerate it’s normal processes. This causes soft tissue
                  (gums) to close faster and it has Bone Morphogenic Proteins
                  (BMPs) that help create new bone quickly.
                </p>
                <p>
                  PRF is not just a product, it is a product of YOU. A small
                  amount of blood is drawn, just like giving a sample at your
                  physician’s office, and that blood is centrifuged to
                  concentrate the healing molecules into a clot in the test
                  tube. The clot can be used by itself, mixed into bone grafts,
                  or as a covering to protect the surgical site. This clot is
                  purely you, it’s just the best parts of you, so you cannot be
                  allergic and it jump starts the healing process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-12 mt-4 mt-lg-0">
            <img src={prfImage} alt="prfImage" />
          </div>
        </div>
      </section>
      <section style={{ background: "#004caa" }}>
        <div className="container text-white my-5 p-5">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 col-12 mb-4 mb-lg-0">
              <img
                src={compositeOrMercuryImage}
                alt="compositeOrMercuryIMage"
              />
            </div>
            <div className="col-md-12 col-lg-6 col-12">
              <div>
                <h2 className="fw-bold"> Composite or Amalgam ? </h2>
                <div style={{ color: "rgb(216 221 224 / 1)" }}>
                  <p>
                    Dental amalgam is a mix of silver, mercury, tin, and copper.
                    It has been used in the U.S. since the 1800s but has a far
                    longer history. Chinese medical texts from the first century
                    refer to an amalgam of tin, mercury, and silver. The
                    material in a composite filling is a blend of polymers and
                    glass that, unlike amalgam, are hardened with a special blue
                    light. While there are several differences between composite
                    and amalgam fillings, and both have their advantages and
                    downsides, they have one thing in common: both are highly
                    effective in ensuring teeth remain strong, healthy and
                    functional for many years.
                  </p>
                  <p>
                    Composite fillings – also called white fillings because of
                    their tooth-colored properties – are made from plastic
                    polymers and glass. Once the cavity has been opened up, an
                    acidic gel is used to etch the exposed surfaces to aid
                    adhesion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
            <div className="section-text-wrap pb-25">
              <h1> Safety First </h1>
              <p>
                Since 1998, Trusmile has been proud to combine modern techniques
                and high - tech equipment.Dr.John Dae, Micha and his team
                deliver a personalized and comfortable dental care experience
                unlike any other Mason dentist.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <div className="single-video-item">
              <div
                className="video-bg-img"
                style={{
                  backgroundImage: "url(" + bg1 + ")",
                }}
              >
                <a
                  target="_blank"
                  href="https://youtu.be/XXSs6b58wj0"
                  className="popup-video video-play-button"
                  rel="noreferrer"
                >
                  <i className="fa fa-play" aria-hidden="true"></i>
                </a>
              </div>
              <h5>The Importance Of Complete Dentistry for your Health</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12">
            <div className="single-video-item">
              <div
                className="video-bg-img"
                style={{
                  backgroundImage: "url(" + bg2 + ")",
                }}
              >
                <a
                  target="_blank"
                  href="https://youtu.be/-OofaTk9BKs"
                  className="popup-video video-play-button"
                  rel="noreferrer"
                >
                  <i className="fa fa-play" aria-hidden="true"></i>
                </a>
              </div>
              <h5> Safety First with CT Scans! </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
