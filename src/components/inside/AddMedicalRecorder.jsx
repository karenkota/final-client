import React, { Component } from "react";

import service from '../../api/service';

class AddMedicalRecorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullname: "",
          age: "",
          genere: "",
          chronicdiseases: "",
          familiardiseases: "",
          medicaltreatments: "",
          description: "",
          medicines: "",
        };
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
          <div>
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
                    <input className="input"
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
                <div className="Diaseases">
                  <label> Chronic Diseases </label>
                  <textarea  className="input"
                      type="text" 
                      name="chronicdiseases" 
                      value={ this.state.chronicdiseases } 
                      onChange={ e => this.handleChange(e)} />
                  <label> Familiar Diseases </label>
                  <textarea  className="input"
                      type="text" 
                      name="familiardiseases" 
                      value={ this.state.familiardiseases } 
                      onChange={ e => this.handleChange(e)} />
                  <label> Medical Treatments </label>
                  <textarea  className="input"
                      type="text" 
                      name="medicaltreatments" 
                      value={ this.state.medicaltreatments } 
                      onChange={ e => this.handleChange(e)} />
                </div>              
                <div className="actual-clinic">
                  <label> Description Clinical </label>
                  <textarea  className="input"
                      type="text" 
                      name="description" 
                      value={ this.state.description } 
                      onChange={ e => this.handleChange(e)} />
                  <label> Medicines </label>
                  <textarea  className="input"
                      type="text" 
                      name="medicines" 
                      value={ this.state.medicines } 
                      onChange={ e => this.handleChange(e)} />
                </div>    
                <input  className="input"
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save new medical recorder</button>
            </form>
          </div>
        );
    }
}

export default AddMedicalRecorder;