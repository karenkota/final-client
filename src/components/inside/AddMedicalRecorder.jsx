import React, { Component } from "react";
import './AddMedicalRecorder.css'
import service from '../../api/service';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class AddMedicalRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      newId: '',
      fullname: "",
      age: "",
      genere: "",
      typeblood: "",
      cpf: "",
      rg: "",
      email: "",
      medicalagreement: "",
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

  handleRedirect = () => {
    if (this.state.redirect) {
      return (<Redirect to={`/patient/${this.state.newId}`} />)
    }
  }

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    
    service.handleUpload(uploadData)
    .then(response => {
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    service.saveNewMedicalRecorder(this.state)
    .then(res => {
        this.setState({redirect: true, newId: res._id})
    })
    .catch(err => {
        console.log("Error while adding the thing: ", err);
    });
  }  
  
  render() {
    return (
      <section className="medical-search">
        {this.handleRedirect()}
        <div className="search-patient">
        <h1>Welcome, Doctor!</h1>
        <Link to='/patientrecorder' className="searchname">Search for Name</Link>
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
              <input className="input-genere"
                  type="text" 
                  name="genere" 
                  value={ this.state.genere} 
                  onChange={ e => this.handleChange(e)} />
               <label> Blood Type </label>
              <input className="input-blood"
                  type="text" 
                  name="typeblood" 
                  value={ this.state.typeblood} 
                  onChange={ e => this.handleChange(e)} />
            </div>
            <div className="documents">
              <label> C.P.F.: </label>
              <input className="input-cpf"
                  type="number" 
                  name="cpf" 
                  value={ this.state.cpf} 
                  onChange={ e => this.handleChange(e)} />
                <label> R.G.: </label>
                <input className="input-rg"
                  type="number" 
                  name="rg" 
                  value={ this.state.rg} 
                  onChange={ e => this.handleChange(e)} />
                <label> Mail </label>
                <input className="input-email"
                  type="text" 
                  name="email" 
                  value={ this.state.email} 
                  onChange={ e => this.handleChange(e)} />
                <label> Medical Agreement </label>
                <input className="medical-agreement"
                  type="text" 
                  name="medicalagreement" 
                  value={ this.state.medicalagreement} 
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
                <input className="adress"
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
      </section>
    );
  }
}

export default AddMedicalRecorder;