import "./footer.css";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="subscribe-container">
          <p id="sub-head">SUBSCRIBE</p>
          <p>
            To know more and get daily updates...Subscribe to our Newsletter !
          </p>
          <input type="email" id="email-input" />
          <br />
          <button type="submit" id="sub-button">
            Get Newsletter !
          </button>
        </div>
        <div className="details">
          <div className="links">
            <div className="col">
              <div className="head">About us</div>
              <div className="col-items">Overview</div>
              <div className="col-items">Services</div>
              <div className="col-items">Partnerships</div>
            </div>
            <div className="col">
              <div className="head">Contact</div>
              <div className="col-items">Overview</div>
              <div className="col-items">Services</div>
              <div className="col-items">Partnerships</div>
            </div>
            <div className="col">
              <div className="head">Legal and Policies</div>
              <div className="col-items">Overview</div>
              <div className="col-items">Services</div>
              <div className="col-items">Partnerships</div>
            </div>
          </div>
        </div>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </div>
  );
}
