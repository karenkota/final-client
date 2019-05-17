import React, {Component} from 'react';

const PatientRecorder = (props) => {
  {medicalrecorders.map((eachpatient, idx) => {
    return (
      <div key={idx}>
        <h2>{eachpatient.fullname}</h2>
        <p>{eachpatient.id}</p>
        <p>{eachpatient.medicalrecorders}</p>
      </div>
        )
      }
    )
  }
}

export default PatientRecorder;