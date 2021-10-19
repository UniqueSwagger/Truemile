import React from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useFetch from "../../hooks/useFetch";
import Service from "../Service/Service";

const Services = () => {
  const history = useHistory();
  const services = useFetch(`services.json`);
  // dynamic routing
  const handleServiceDetails = (id) => {
    window.scrollTo(0, 40);
    history.push(`/services/${id}`);
  };
  return (
    <div id="services">
      <section className="container mobile-device my-5">
        <h2 className="text-center fw-bold">Our services</h2>
        <hr />
        <p className="text-muted text-center mx-5">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors. You can consult with us about which type of service is
          suitable for your health
        </p>
      </section>
      <section>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4 mb-5 ">
            {services?.map((service) => (
              <Service
                key={service.id}
                service={service}
                handleServiceDetails={handleServiceDetails}
              />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
