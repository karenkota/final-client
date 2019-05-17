import React from "react";

const Cards = ({ patient }) => {
  return (
    <div>
        {patient.fullname},
        {patient.age},
        {patient.genere},
        {patient.bloodtype},
        {patient.phone},
        {patient.adress},
        {patient.chronicdiseases},
        {patient.familiardiseases},
        {patient.medicaltreatments},
        {patient.description},
        {patient.medicines},
        {patient.upload}
    </div>
  )
}

export default Cards;