import React from "react";
import Appointment from "../Appointment/Appointment";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Treatments from "../Treatments/Treatments";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

const Home = () => {
  return (
    <div id="home">
      {window.scrollTo(0, 40)}
      <HeroSection />
      <Services />
      <WelcomeSection />
      <Treatments />
      <Appointment />
    </div>
  );
};

export default Home;
