import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="left-container text-start">
            <h1>Arcane Dental Care</h1>
            <div className="icons-container d-flex text-center ">

              <div className="icon">
                <i className="fab fa-facebook-square fa-2x"></i>
              </div>
              <div className="icon">
                <i className="fab fa-instagram-square fa-2x"></i>
              </div>
              <div className="icon">
                <i className="fab fa-twitter-square fa-2x"></i>
              </div>
              <div className="icon">
                <i className="fab fa-youtube-square fa-2x"></i>
              </div>
            </div>
            <p className="mt-5">
              <small>Arcane 2021 ©  All rights reserved.</small>
            </p>
          </div>
        </div>


        <div className="col-md-1 col-sm-12">
          <div className="">
            <ul>

              <li className="footer-menu">
                <Link to="/home" className="item">
                  Home
                </Link>
              </li>

              <li className="footer-menu">
                <Link to="/services" className="item">
                  Services
                </Link>
              </li>

              <li className="footer-menu">
                <Link to="/contact" className="item">
                  Contact
                </Link>
              </li>

              <li className="footer-menu">
                <Link to="/about" className="item">
                  About us
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="col-md-4 my-5 col-sm-12">

            <p><i class="fa fa-clock-o"></i>Monday 8:00 AM - 9:00 PM</p>

            <p><i class="fa fa-clock-o"></i>Tuesday 8:00 AM - 9:00 PM</p>

            <p><i class="fa fa-clock-o"></i>Wednusday 8:00 AM - 9:00 PM</p>

            <p><i class="fa fa-clock-o"></i>Thursday 8:00 AM - 9:00 PM</p>

            <p><i class="fa fa-clock-o"></i>Friday 8:00 AM - 9:00 PM</p>

            <p><i class="fa fa-clock-o"></i>Saturday 8:00 AM - 9:00 PM</p>

            <p><i class="fa fa-clock-o"></i>Sunday CLOSED</p>

        </div>

        <div className="col-md-3 col-sm-12">
          <div className="">
            <h3>Sign up for the newsletter</h3>
            <br />
            <input
              className="footer-input"
              type="text"
              placeholder="Enter Email"
            />
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div>
                <h5>+880 184 4476</h5>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div>
                <p>
                  160 Broadway, New York, NY 10038,
                  <br /> 102 1st Avenue, New York, NY 100
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;