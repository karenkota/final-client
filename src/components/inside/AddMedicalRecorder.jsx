import React, { Component } from "react";
import './AddMedicalRecorder.css'
import service from '../../api/service';
import PatientRecorder from "./PatientRecorder";
// import { Link } from 'react-router-dom';

class AddMedicalRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      age: "",
      genere: "",
      phone:"",
      adress:"",
      chronicdiseases: "",
      familiardiseases: "",
      medicaltreatments: "",
      description: "",
      medicines: "",
      upload: ""
    }
  } 
  
  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    
    service.handleUpload(uploadData)
    .then(response => {
        this.setState({ imageUrl: response.secure_url });
        console.log(response.secure_url)
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  // this method submits the form
  handleSubmit = e => {
    e.preventDefault();
    
    service.saveNewMedicalRecorder(this.state)
    .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page 
    })
    .catch(err => {
        console.log("Error while adding the thing: ", err);
    });
  }  

  
  render() {
    return (
      <sections className="medical-area">
        <div className="search-patient">
          <PatientRecorder />
        </div>
        <div className="form-new-patient">
          <h2>New Patient</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="Patient">
            <label> Fullname </label>
              <input className="input"
                  type="text" 
                  name="fullname" 
                  value={ this.state.fullname } 
                  onChange={ e => this.handleChange(e)} />
                <label> Age </label>
                <input className="input-age"
                  type="number" 
                  name="age" 
                  value={ this.state.age } 
                  onChange={ e => this.handleChange(e)} />
              <label> Genere </label>
              <input className="input"
                  type="text" 
                  name="genere" 
                  value={ this.state.genere} 
                  onChange={ e => this.handleChange(e)} />
            </div>
            <div className="contacts">
            <label> Phone number </label>
              <input className="input-phone"
                  type="number" 
                  name="phone" 
                  value={ this.state.phone} 
                  onChange={ e => this.handleChange(e)} />
                <label> Adress </label>
                <input className="input-adress"
                  type="text" 
                  name="adress" 
                  value={ this.state.adress } 
                  onChange={ e => this.handleChange(e)} />
            </div>
            <div className="Diaseases">
              <div>
              <label> Chronic Diseases </label>
              <textarea  className="input-description"
                  type="text" 
                  name="chronicdiseases" 
                  value={ this.state.chronicdiseases } 
                  onChange={ e => this.handleChange(e)} />
              </div>
              <div>
              <label> Familiar Diseases </label>
              <textarea  className="input-description"
                  type="text" 
                  name="familiardiseases" 
                  value={ this.state.familiardiseases } 
                  onChange={ e => this.handleChange(e)} />
              </div>
              <div>
              <label> Medical Treatments </label>
              <textarea  className="input-description"
                  type="text" 
                  name="medicaltreatments" 
                  value={ this.state.medicaltreatments } 
                  onChange={ e => this.handleChange(e)} />
              </div>
            </div>              
            <div className="actual-clinic">
              <div>
              <label> Description Clinical </label>
              <textarea  className="input-description"
                  type="text" 
                  name="description" 
                  value={ this.state.description } 
                  onChange={ e => this.handleChange(e)} />
              </div>
              <div className="medicines">
              <label> Medicines </label>
              <textarea  className="input-description"
                  type="text" 
                  name="medicines" 
                  value={ this.state.medicines } 
                  onChange={ e => this.handleChange(e)} />
              </div>
            </div>    
            <div className="btns-upload">
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button className="btn-submit" type="submit"> Save </button>
            </div>
          </form>
        </div>
      </sections>
    );
  }
}

export default AddMedicalRecorder;