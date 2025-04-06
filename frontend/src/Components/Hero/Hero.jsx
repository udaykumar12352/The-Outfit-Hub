import React from 'react';
import './Hero.css';
import heroImage from '../Assets/hero_image.jpeg'; // Replace with your hero image path

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to The Outfit Hub</h1>
        <p>Discover the best styles tailored for you</p>
        <button>Shop Now</button>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image"/>
    </div>
  );
};

export default Hero;
