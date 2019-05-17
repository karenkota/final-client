import React, {Component} from 'react';
// import 'PatientRecorder.css';
import { Link } from 'react-router-dom';
import SearchPatient from './SearchPatient';
import Cards from './Cards';

class PatientRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalrecorders: [],
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  search() {
    if (this.state.search.length !== 0) {      
      const patient = this.props.patientList.filter(e => e.fullname.includes(this.state.search));
      this.setState({medicalrecorders: patient})
    } else this.setState({medicalrecorders: []})
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({search: e.target.value}, () => {this.search()})
  }
  
  render() {
  return (
    <div>
      <SearchPatient getPatient={this.getPatient} handleChange={this.handleChange} />
      {this.state.medicalrecorders.map(p => <p>{<Cards patient={ p } />}</p>)}
    </div>
  )}
}    

export default PatientRecorder;