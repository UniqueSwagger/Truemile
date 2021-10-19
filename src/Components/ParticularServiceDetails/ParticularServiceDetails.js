import React from "react";

const ParticularServiceDetails = ({ particularServiceDetails }) => {
  const {
    name,
    image,
    image2,
    description,
    shortDescription,
    howWeDo,
    whenToDo,
    benefits,
  } = particularServiceDetails ? particularServiceDetails : "";

  return (
    <>
      <div>
        <h2 className="fw-bold">What is {name}?</h2>
        <p>{description}</p>
        <img
          className="img-fluid w-100 mb-3"
          loading="lazy"
          src={image2}
          alt={name}
        />
        <h2 className="fw-bold">How we do it?</h2>
        <p>{howWeDo}</p>
      </div>
      <div>
        <img
          className="img-fluid w-100 mb-3"
          loading="lazy"
          src={image}
          alt={name}
        />
        <p>{shortDescription}</p>
        <h2 className="fw-bold">What are the Benefits of {name}?</h2>
        <p>{benefits}</p>
        <h2 className="fw-bold">When to do?</h2>
        <p>{whenToDo}</p>
      </div>
    </>
  );
};

export default ParticularServiceDetails;
