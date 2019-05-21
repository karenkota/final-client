import React, {Component} from 'react';
import './PatientRecorder.css'
import { Link } from 'react-router-dom';
import Cards from './Cards';

class PatientRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalrecorders: [],
      userInput: '',
    }  
    this.handleChange = this.handleChange.bind(this);
  }

  search() {
    if (this.state.userInput.length !== 0) {      
      const patient = this.props.patientList.filter(e => e.fullname.includes(this.state.userInput));
      console.log(patient)
      this.setState({medicalrecorders: patient}, () => {
        console.log(this.state.medicalrecorders)
      })
    } else this.setState({medicalrecorders: []})
  }

  handleChange(e) {
    this.setState({userInput: e.target.value}, () => {this.search()})
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-bar-name" type="text" placeholder="SEARCH FOR NAME" onChange={(e) => this.handleChange(e)} />
        {             
          this.state.medicalrecorders.map((patient, idx) => {
            return (
            <ul className="list-names-col">
              <li className="list-names"><Link to={`/patient/${patient._id}`}>{patient.fullname}</Link></li>
            </ul>
            )
          })
        } 
      </div>
    )}
  }

export default PatientRecorder;
