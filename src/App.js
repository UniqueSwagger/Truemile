import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomePage/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import Navigation from "./Components/SharedPage/Navigation/Navigation";
import AuthProvider from "./context/AuthProvider";
import Signup from "./Components/Signup/Signup";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import React from "react";
import Facilities from "./Components/Facilities/Facilities";
import Services from "./Components/Services/Services";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services />
            </PrivateRoute>
            <PrivateRoute path="/facilities">
              <Facilities />
            </PrivateRoute>
            <PrivateRoute path="/about-us">
              <AboutUs />
            </PrivateRoute>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forget-password">
              <ForgotPassword />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
