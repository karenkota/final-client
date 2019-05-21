import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import service from '../../api/service';
import AddMedicalRecorder from "./AddMedicalRecorder";
import axios from 'axios';


class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullnameHeader: "",
      fullname: "",
      age: "",
      genere: "",
      bloodtype: "",
      cpf: "",
      rg: "",
      email: "",
      medicalagreement: "",
      phone: "",
      adress: "",
      chronicdiseases: "",
      familiardiseases: "",
      medicaltreatments: "",
      description: "",
      medicines: "",
      upload: ""
    }
  } 

  componentDidMount() {
		axios.get(`http://localhost:5003/api/medicalRecorder/${this.props.match.params.id}`)
		.then(res => {
      const { fullname, age, genere, bloodtype, cpf, rg, email, medicalagreement, phone, adress, chronicdiseases, familiardiseases, medicaltreatments, description, medicines, upload } = res.data;
			this.setState({
        fullnameHeader: fullname,
        fullname,
        age,
        genere,
        bloodtype,
        cpf,
        rg,
        email,
        medicalagreement,
        phone,
        adress,
        chronicdiseases,
        familiardiseases,
        medicaltreatments,
        description,
        medicines,
        upload
      })
		})
		.catch(error => console.log(error))
	}
  
  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

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

  handleSubmit = e => {
    e.preventDefault();
    service.editMedicalRecorder(this.state, this.props.match.params.id)
    .then(res => {
        console.log('edit: NEW DATA', res);
        // here you would redirect to some other page 
    })
    .catch(err => {
        console.log("Error while editing the thing: ", err);
    });
  }  
  
  deletePatient = (e) => {   
    service.deleteMedicalRecorder(this.props.match.params.id)
    .then(res => {
        alert('Delete Patient', res);
        return(
        <Redirect to="/addmedicalrecorder"/>
        )
    })
    .catch(err => {
        console.log("Error while delete the thing: ", err);
    });
  }

  render(props) {
    return (
      <sections className="medical-area">
        <h2>{this.state.fullnameHeader}</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="Patient">
          <label> Fullname </label>
            <input className="input"
                type="text" 
                name="fullname"
                value={this.state.fullname} 
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
                name="bloodtype" 
                value={ this.state.bloodtype} 
                onChange={ e => this.handleChange(e)} />
          </div>
          <div className="documents">
            <label> C.P.F.: </label>
            <input className="input-cpf"
                type="number" 
                name="cpf" 
                value={ this.state.cpf} 
                onChange={ e => this.handleChange(e)} />
              <label> R.G.:</label>
              <input className="input-rg"
                type="number" 
                name="rg" 
                value={ this.state.rg} 
                onChange={ e => this.handleChange(e)} />
              <label> e-mail </label>
              <input className="input-email"
                type="text" 
                name="email" 
                value={ this.state.email} 
                onChange={ e => this.handleChange(e)} />
              <label> Medical Agreement </label>
              <input className="input-medical-agreement"
                type="text" 
                name="medical-agreement" 
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
              <button className="btn-submit" type="submit"> EDIT </button>
          </div>
        </form>
          <button className="delete" onClick={() => this.deletePatient()}> DELETE </button>
      </sections>
    );
  }
}
  
export default Cards;