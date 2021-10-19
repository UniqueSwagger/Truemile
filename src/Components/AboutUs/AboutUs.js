import React from "react";
import "./AboutUs.css";
import useFetch from "../../hooks/useFetch";
const AboutUs = () => {
  const reviews = useFetch(`patientReview.json`);
  return (
    <>
      <div className="text-center w-50 my-5 mx-auto">
        <h2 className="fw-bold">Our Dental Practice</h2>
        <p className="text-muted">
          Since 1998, Trusmile Dentistry has been proud to combine modern
          techniques and high-tech equipment. Dr. John Dae, Micha and his team
          deliver a personalized and comfortable dental care experience unlike
          any other Mason dentist.
        </p>
      </div>
      <section
        className=" py-4 my-5 text-white"
        style={{ background: "#004CAA" }}
      >
        <div className="container my-5 ">
          <h2 className="text-center py-5">Patient Focused Approach</h2>
          <div className="row">
            {reviews.map((review) => {
              const { id, image, title, text, reviewer } = review;
              return (
                <div
                  className="col-md-6 col-12 col-lg-6 col-xl-4 my-4 text-center"
                  key={id}
                >
                  <div className="single-review-box p-3 h-100 ">
                    <div className="review-icon">
                      <img src={image} alt={title} />
                    </div>
                    <h3> {title} </h3>
                    <p> {text} </p>
                    <h5>{reviewer}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src="https://i.ibb.co/1zP2zQV/experienceddentist-e6c521bb.png"
              alt="doctor"
            />
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="mt-3 mt-lg-0">Experienced Dentist</h1>
            <div className="text-muted">
              <p>
                Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has
                embraced Cosmetic Dentistry and has redesigned the smiles for
                thev thousands of patients.
              </p>
              <p>
                Dr. Harrie believes in providing her patients with more than
                just world class dental care. He also helps patients recognize
                the vital connection between dental health and whole body
                health. A graduate of the University of California’s School of
                Dentistry, Dr. Harrie is a leader in the movement to bring
                environmental sanity and well-being into the dental world for
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
