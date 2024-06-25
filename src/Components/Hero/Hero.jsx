import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I&apos;m Alex Bennett,</span> fronted developer bases in USA</h1>
      <p>
        I am a fronted developer from California, USA with 10 years of
        experience in multiple companies like Microsof, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connet with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
