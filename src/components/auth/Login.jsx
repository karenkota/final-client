import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.setUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <section className="background-login">
        <div className="login">

          <form className="form-login" onSubmit={this.handleFormSubmit}>
            <div>
              <label>  Username:  </label>
              <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            </div>
            <div>
              <label>  Password:  </label>
              <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </div>
            {/* type = deixa criptografado */}
            <div>
              <button className="btn-login" type="submit">Login</button>
            </div>
          </form>
        </div>

         <footer>
             <div className="LoginCare">
               <p>Our Story</p>
               <p>Awards</p>
               <p>Patients Care</p>
               <p>Contacts</p>
               <p>SAC</p>
              </div>
             <div className="Sociallogin">
                 <img src="/images/facebook.png" />
                 <img src="/images/twitter.png" />
                 <img src="/images/whatsapp.png" />
                 <img src="/images/instagram.png" />
             </div>
           </footer>
      </section>
    )
  }
}

export default Login;