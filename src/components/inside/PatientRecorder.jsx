import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import Cards from './Cards';

class PatientRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicalrecorders: [],
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  search() {
    if (this.state.search.length !== 0) {      
      const patient = this.props.patientList.filter(e => e.fullname.includes(this.state.search));
      if (patient.length === 1) {
        this.setState({medicalrecorders: patient})
      }
    } else this.setState({medicalrecorders: []})
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({search: e.target.value}, () => {this.search()})
  }
  
  render() {
  return (
    <div>
      <input type="text" placeholder="SEARCH" onChange={(e) => this.handleChange(e)} />
       {
          this.state.medicalrecorders.map((patients, idx) => { 
          return <Link>{patients.fullname}</Link>
            })
      }
    </div>
  )}
}    

export default PatientRecorder;