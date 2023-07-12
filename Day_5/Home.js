import React from "react";
import "./Home.css";
import family from "C:/Users/prath/Desktop/Insurance Portal/assure/src/assets/img2.jpg";
import Navbar from "./navbar";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="abc">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="intro">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-asian-family-illustration_23-2149425676.jpg?w=740&t=st=1689134746~exp=1689135346~hmac=a9643967890458bdee6e91d0d33f2ab086b1e5b1c14324307606d65006bd2187"
          className="intro-item"
        />
        <div className="intro-item content">Assure</div>
      </div>
      <div className="About">
        <div className="about-item content">
          <div className="abt-content">About</div>
        </div>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-homecoming-illustration_23-2149425674.jpg?w=740&t=st=1689155802~exp=1689156402~hmac=0b1f82342e6ddaf9792a57444185c4d68cde6d6d2d0d130a157c0bb7aba2dd91"
          className="about-img"
        />
      </div>
      <Footer />
    </div>
  );
}
