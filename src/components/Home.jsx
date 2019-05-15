import React from "react";
import './Home.css';


const Home = (props) => {
  return (
    <div className="Home">
      <div className="background">
          <h1>Medical Center</h1>
          <img className="health" src="/images/health-capa.png" />
      </div>
      <footer>
        <div className="PatientsCare">
          <p>Our Story</p>
          <p>Awards</p>
          <p>Patients Care</p>
          <p>Contacts</p>
          <p>SAC</p>
        </div>
        <div className="SocialMedia">
            <img src="/images/facebook.png" />
            <img src="/images/twitter.png" />
            <img src="/images/whatsapp.png" />
            <img src="/images/instagram.png" />
        </div>
      </footer>
      <p className="signature">By Karen Ota in IRONHACK</p>
    </div>
  );
}

export default Home;