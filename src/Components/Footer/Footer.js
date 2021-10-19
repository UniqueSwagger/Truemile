import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Trusmile</h1>

          <h2>Contact</h2>

          <address>
            115/1 North Kalimabad,Moulvibazar
            <br />
            <a className="footer__btn" href="mailto:rahmanmahi02@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Services</h2>

            <ul className="nav__ul">
              <li>
                <HashLink to="/home#services">Dental Fillings</HashLink>
              </li>
              <li>
                <HashLink to="/home#services">Root Canal Treatment</HashLink>
              </li>

              <li>
                <HashLink to="/home#services">Orthodontics</HashLink>
              </li>

              <li>
                <HashLink to="/home#services">Teeth Whitening</HashLink>
              </li>
              <li>
                <HashLink to="/home#services">Tooth Extraction</HashLink>
              </li>
              <li>
                <HashLink to="/home#services">Routine Dental Exam</HashLink>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Status</h2>
            <span style={{ color: "#CFDDDD" }}>We are open now!</span>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Address</h2>

            <ul className="nav__ul">
              <li>
                <Link to="/home">Trusmile</Link>
              </li>

              <li>
                <span style={{ color: "#CFDDDD" }}>
                  115/1 North Kalimabad,Moulvibazar
                </span>
              </li>

              <li>
                <span style={{ color: "#CFDDDD" }}>phone: 01731248533</span>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <span style={{ color: "#CFDDDD" }}>Privacy Policy</span>
              </li>

              <li>
                <span style={{ color: "#CFDDDD" }}>Terms of Use</span>
              </li>

              <li>
                <span style={{ color: "#CFDDDD" }}>Sitemap</span>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2021 Trusmile. All rights reserved.</p>

          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> remotely from
              Bangladesh
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
