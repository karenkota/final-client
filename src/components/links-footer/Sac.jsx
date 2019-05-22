import React, { Component } from "react";
import './Sac.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Sac extends Component {
	constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: '',   
      email: '',  
      message: ''
      }
    }
    
  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleRedirect = () => {
    if (this.state.redirect) {
      return (<Redirect to={`/`} />)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5003/api/send-email', this.state)
    .then((response) => {
      console.log('responseeeeeee', response)
      this.setState({
        name : '',
        email: '',  
        message: ''
      });
      alert("Message Sent"); 
      })
      .catch(error => console.log(error))
    }
    
    render() {
      return(
        <form className="contact-form" onSubmit={this.handleSubmit}>
        {this.handleRedirect()}
        <h4> Your Opinion is very important to us! </h4>
        <div className="form-sac">
          <label> Name: </label>
          <input className="input-name-sac"
            type="text" 
            name="name" 
            value={ this.state.name } 
            onChange={ e => this.handleChange(e)} />
        </div>
        <div className="form-sac">
          <label> E-mail: </label>
          <input className="input-email-sac"
            type="text" 
            name="email" 
            value={ this.state.email } 
            onChange={ e => this.handleChange(e)} />
        </div>    
        <div className="form-sac">
          <label> Message </label>
          <textarea className="form-control" 
            rows="20"    
            type="text"  
            name="message" 
            value={ this.state.message } 
            onChange={ e => this.handleChange(e)} />
        </div>
          <button type="submit" className="btn-SAC">SEND</button>
      </form>
    )
  }
}

export default Sac;