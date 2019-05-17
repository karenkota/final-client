import React from "react";
import './Awards.css';

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-txt">
      <h1>Great Hospitals</h1>
      <p>
        Becker’s Hospital Review listed Children’s Hospital Los Angeles as one of the “100 Great Hospitals in America”. We were the only freestanding children’s hospital in California to make the list.
      </p>
      <h1>Excellence in Nursing</h1>
      <p>
      The American Nurses Credentialing Center has accorded our hospital with Magnet Recognition®.  Magnet® status is used as a national benchmark of the quality of care provided by a hospital's patient care services staff members.
      </p>
      <h1>Beacon Award</h1>
      <p>
      The Cardiothoracic Intensive Care Unit (CTICU) was awarded the 2017 silver Beacon Award for Critical Care Excellence by the American Association of Critical-Care Nurses.
      </p>
      <h1>HealthCare's Most Wired</h1>
      <p>
      At Orchestra Medical Center we understand that in order to provide the best experience for all of our patients, it is crucial to ensure that we keep the thousands of medical records that we deal with every day secure.
      Our information technology department works hard to create a reliable computer network to keep these important files safe, and we’ve been recognized for our dedication to patient privacy.
      We’re proud to have been named as one of the American Hospital Association’s (AHA) Health Forum’s Most Wired® 2017.
      AHA determines winners through a survey which measures how hospitals are using technology to support patient safety and overall care. This year, 698 total participants were surveyed, with Orchestra Medical Center being named as one of 21 children's hospitals to receive the designation.
      </p>
    </div>
    <div className="awards-img">
      <img src="./images/american-nurses.png"/>
      <img src="./images/CHLA-Beacon-Logo-2017-01.jpg"/>
    </div>
    </section>

  )
}

export default Awards;