import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/auth/SignUp';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AddMedicalRecorder from './components/inside/AddMedicalRecorder';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contacts from './components/links-footer/Contacts';
import AboutUs from './components/links-footer/AboutUs';
import Awards from './components/links-footer/Awards';
import PatientsCare from './components/links-footer/PatientsCare';
import Sac from './components/links-footer/Sac';

class App extends Component {
	constructor(props){
			super(props)
			this.state = { loogedInUser: null };
			this.service = new AuthService();
	}

	setTheUser = (userObj) => {
			this.setState({
					loogedInUser: userObj
			})
	}

	fetchUser() {
			if( this.state.loggedInUser === null ){
					this.service.loggedin()
					.then(response =>{
							this.setState({
									loggedInUser: response
							})
					})
					.catch( err =>{
							this.setState({
									loggedInUser: false
							})
					})
			}
	}
			
	render() {
		this.fetchUser()
		if(this.state.loggedInUser){
			return (
				<div className="App">
					<Home />
					<Navbar userInSession={this.state.loggedInUser} setUser={this.setTheUser} />
				</div>
			);
		} else {
			return (
				<div className="App">
					<Navbar userInSession={this.state.loggedInUser} setUser={this.setTheUser} />
						<Switch> 
							<Route exact path='/login' render={() => <Login setUser={this.setTheUser}/>}/>
							<Route exact path='/' component={Home}/>
							<Route exact path='/contacts' component={Contacts}/>
							<Route exact path='/addmedicalrecorder' component={AddMedicalRecorder} />
							<Route exact path='/about-us' component={AboutUs}/>
							<Route exact path='/awards' component={Awards}/>
							<Route exact path='/patients-care' component={PatientsCare}/>
							<Route exact path='/sac' component={Sac}/>
						</Switch>
						
				</div>
			);
		}
	}
}
  
export default App;