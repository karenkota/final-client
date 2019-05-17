import React from "react";
import { Link } from 'react-router-dom';
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
          <Link to='/about-us'>About Us</Link>
          <Link to='/awards'>Awards</Link>
          <Link to='/patients-care'>Patients Care</Link>
          <Link to='/contacts'>Contacts</Link>
          <Link to='/sac'>Sac</Link>
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