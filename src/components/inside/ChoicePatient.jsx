import React from "react";
import SearchPatient from "./SearchPatient";
import AddMedicalRecorder from "./AddMedicalRecorder";


const ChoicePatient = (props) => {
  return (
    <section className="choice">
      <h1>Welcome, {props.userLog}</h1>
      <div className="bts-search">
        <SearchPatient />
      </div>
      <div className="bts-addNew">

      </div>

    </section>

  )
}

export default ChoicePatient ;