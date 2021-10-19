import React from "react";
import { Card, Col } from "react-bootstrap";
import Loader from "../Loader/Loader";
import "./Service.css";

const Service = (props) => {
  const { name, image, shortDescription, id } = props.service;
  return (
    <>
      {name ? (
        <Col>
          <Card className="border-0 h-100 service shadow ">
            <div className="service-image">
              <Card.Img
                className="img-fluid lazy-loaded "
                src={image}
                loading="lazy"
                alt={name}
              />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h5 className="fw-bold">{name}</h5>
              </Card.Title>
              <Card.Text className="text-muted">{shortDescription}</Card.Text>
              <button
                onClick={() => props.handleServiceDetails(id)}
                type="button"
                className="btn btn-outline-primary mt-auto d-block shadow-none w-50 mx-auto rounded-pill py-2 px-4"
              >
                Read more
              </button>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Service;
