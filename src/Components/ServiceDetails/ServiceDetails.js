import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import ParticularServiceDetails from "../ParticularServiceDetails/ParticularServiceDetails";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [allService, setAllService] = useState([]);
  const [particularServiceDetails, setParticularServiceDetails] = useState({});
  useEffect(() => {
    fetch("/serviceDetails.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);
  //finding the clicked service
  useEffect(() => {
    const particularService = allService?.find(
      (singleService) => singleService.id === Number(serviceId)
    );
    setParticularServiceDetails(particularService);
  }, [allService, serviceId]);
  return (
    <>
      {particularServiceDetails ? (
        <div>
          <section className="breadcrumb-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="inner-content">
                    <div className="title float-start">
                      <h2>{particularServiceDetails?.name}</h2>
                    </div>
                    <div className="breadcrumb-menu float-end">
                      <ul>
                        <li className="breadcrumb-item">
                          <Link to="/home">Home </Link>
                        </li>
                        <li className="breadcrumb-item">
                          {particularServiceDetails?.name}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="row row-cols-lg-2 row-cols-1 m-5">
            <ParticularServiceDetails
              particularServiceDetails={particularServiceDetails}
            />
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ServiceDetails;
