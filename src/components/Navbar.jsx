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
      this.setState({ loggedInUser: null });
      this.props.setUser(null);  
    })
  }

  toogleSidebar() {
    console.log('chamou o sidebar', this.state.sideBar)
    this.setState({
      sideBar: !this.state.sideBar,
    });
  }
  

  render(){
    const sideBar = (
      <div className="sidebar">
        <Link to='/' style={{ textDecoration: 'none' }}>Logout</Link>
        <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
        <Link to='/contacts' style={{ textDecoration: 'none' }}>Contacts</Link>
        <Link to='/sac' style={{ textDecoration: 'none' }}>SAC</Link>
      </div>
    );

    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.username}</li>
            <li>
              <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return ( 
        <nav className="nav-style">
          <a href=""><img className="logo" src="/images/logo.png" /></a>
          { this.state.sideBar ? sideBar : null }
          <img className="menu" src="/images/menu.png" onClick={() => this.toogleSidebar()} />
        </nav>
      )
    }
  }
}

export default Navbar;