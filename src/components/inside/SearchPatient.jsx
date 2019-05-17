import React from 'react'

const SearchPatient = ({ handleChange }) => {
  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>
)}


export default SearchPatient;