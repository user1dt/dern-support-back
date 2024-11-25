import React from "react";
import Navbar from "../navbar/navbar";
import "./homepage.css";
import frontimg from "../../assets/frontimg.png";
import brand from "../../assets/brand.png";
import dell from "../../assets/dell.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Homepage  = () => {
  const navigate = useNavigate()

  const bookrepair =()=>{
    navigate("/login")
  }
  return (
    <>
      <Navbar />
      <section className="main1">
        <div className="main-content">
          <img src={frontimg} alt="" className="main-image1"></img>
          <h1>Fast, reliable laptop repair</h1>
          <p>Get your laptop fixed in as little as 25 minutes.</p>
          
        </div>
      </section>
      <section className="why-choose">
        <h2>Why choose Dern Support</h2>
        <p>
          We're the UK's leading laptop repair specialist, with over 10 years'
          experience providing professional, affordable and reliable laptop
          repair services. From cracked screens and water damage to faulty
          batteries and software issues, we've got the expertise to fix all
          makes and models
        </p>
        <br></br>
        <p>
          We offer a wide range of repair services for the most popular laptop
          brands, including Apple, Dell, HP, Lenovo, Acer, Asus, Microsoft, and
          more
        </p>
        <div className="brand-logos">
          <div className="logo-item">
            <img src={brand} alt="Apple"></img>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="why-choose-us">
          <div className="card">
            <h3>4.6</h3>
            <p>Google Rating</p>
          </div>
          <div className="card">
            <h3>100%</h3>
            <p>Satisfaction Guaranteed</p>
          </div>
          <div className="card">
            <h3>24-48 hours</h3>
            <p>Average Turnaround Time</p>
          </div>
        </section>
        <section className="our-services">
          <div className="service-head">

            <h2>Our Services</h2> 
          </div>
          <div className="services">

          <div className="service">
            <h3>Laptop Won't Turn On</h3>
            <p>No power, no lights, or no display</p>
          </div>
          <div className="service">
            <h3>Cracked Screen</h3>
            <p>Replacement and repair services</p>
          </div>
          <div className="service">
            <h3>Keyboard Issues</h3>
            <p>Repair and replacement of keyboard components</p>
          </div>
          </div>
        </section>
      </div>
      <section className="cta">
        <h2>Ready to get your laptop fixed?</h2>
        <button className="cta-button" onClick={bookrepair}>Book a repair</button>
    </section>
    </>
  );
};

export default Homepage;
