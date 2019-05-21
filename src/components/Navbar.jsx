import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/auth/AuthService';
import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedInUser: null,
      sideBar: false,
    };
    this.service = new AuthService();
    this.toogleSidebar = this.toogleSidebar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      console.log('akjslkdjasld');
      
      })
      this.props.setUser({});  
  }

  toogleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  }
  
  render(){
    const sideBar = (
      <div className="sidebar">
        <Link to='/' style={{ textDecoration: 'none' }}><p onClick={() => this.logoutUser()}>Logout</p></Link>
        <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
        <Link to='/contacts' style={{ textDecoration: 'none' }}>Contacts</Link>
        <Link to='/sac' style={{ textDecoration: 'none' }}>SAC</Link>
      </div>
    );

    return ( 
      <nav className="nav-style">
        <Link to='/' style={{ textDecoration: 'none' }}><img className="logo" src="/images/logo.png" /></Link>
        { this.state.sideBar ? sideBar : null }
        <img className="menu" src="/images/menu.png" onClick={() => this.toogleSidebar()} />
      </nav>
    );
  }
}

export default Navbar;