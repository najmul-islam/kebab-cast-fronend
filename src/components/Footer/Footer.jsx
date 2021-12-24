import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { FooterWrapper, FooterLi } from "./style/footer";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="img/logo.png" alt="logo" />
            <p className="">&copy; All right reserved</p>
          </div>
          <div className="col-md-4 mt-4">
            <p>kebabcast.com A magazine with dreams</p>

            <ul className="navbar-nav d-flex flex-row mr-20">
              <li className="nav-item d-inline-block me-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item d-inline-block me-3">
                <Link className="nav-link" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item  d-inline-block me-3">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-3">
            <ul className="navbar-nav d-flex flex-row justify-content-end">
              <FooterLi className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/kebabcast1/"
                >
                  <FaFacebookF className="text-light" />
                </a>
              </FooterLi>
              <FooterLi className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/KebabCast"
                >
                  <FaTwitter className="text-light" />
                </a>
              </FooterLi>
              <FooterLi className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.pinterest.com/kebabcastofficial/"
                >
                  <FaPinterest className="text-light" />
                </a>
              </FooterLi>
            </ul>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
