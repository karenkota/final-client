import React from "react";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about">
      <div className="aboutus">
        <h1>Orchestra Medical Center</h1>
        <p className="about-orchestra">
          You care about your community, and so do we. Since 1986, Orchestra Medical Center gives millions of dollars in support and services to the areas we serve. We provide care for those who cannot afford it, fund education and research that will improve lives, and contribute to programs and organizations that provide health-related services for those in need. These include mobile clinics, transportation services, prevention and wellness programs, food banks. We endeavor to be a good neighbor so that everyone has the opportunity to live a full and healthy life.
        </p>
        <h1>Mission, Vision and Values</h1>
        <p className="about-mvv">
          Sutter Health has established mission and vision statements and a core list of our values that define why we work and give. These also are the guidelines we use to determine where to direct our community benefit efforts so they will most represent Sutter’s ideals.
        </p>
      </div>
      <img className="about-us-img" src="/images/about-us.png"/>
    </section>
  )
}

export default AboutUs;