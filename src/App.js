import React, { Component} from 'react';

import {BrowserRouter , Route, Switch} from 'react-router-dom'

import Home from './Components/Home/Home'

import SignUp from './Components/Home/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import EventPage from './Components/Dashboard/EventPage';
import firebase from '../node_modules/firebase'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import AdminPage from './Components/Admin/AdminPage';
import Support from './Components/Home/Support';
import Policy from './Components/Home/Policy';
export default class App extends Component {
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyDLT0XMNb9S5cVuvhrRGFjW3rlJNqSV5f0",
      authDomain: "planna-f379d.firebaseapp.com",
      databaseURL: "https://planna-f379d.firebaseio.com",
      projectId: "planna-f379d",
      storageBucket: "planna-f379d.appspot.com",
      messagingSenderId: "625404442270",
      appId: "1:625404442270:web:9628e335bfd0e9900eed8f",
      measurementId: "G-1FGVZ0C44X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  render() {
    return (
     
          <BrowserRouter>
        
          <Switch>
          {/*  Home page */}
          {/* <Navbar/> */}
          <Route path="/" component={Home} exact/>
          <Route path="/signup" component={SignUp} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/event/:id" component={EventPage} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/getstarted" component={GetStarted} exact/>
          <Route path="/admin/addproduct" component={AdminPage} exact/>
          <Route path="/support" component={Support} exact/>
          <Route path="/policy" component={Policy} exact/>
          

          
          </Switch>
          </BrowserRouter>
 
    )
  }
}
