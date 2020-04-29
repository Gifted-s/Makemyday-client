import React, { Component} from 'react';
import Here from './Here';
import Easy from './Easy';
// import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ScrollAnimation from 'react-animate-on-scroll'
// import {Spinner} from 'reactstrap';
export default class Home extends Component {
  render() {
  window.scrollTo(0,0)
    return (
        <React.Fragment>
          <div className="for-scorll">

        
            <Navbar/>
        <div id="top" className="container-fluid background">
          
         <div className="row">
       
           <div className="col-md-12 col1">
            <h1 >Welcome to Makemyday </h1>
            
            <h3>  <p className="divisor"></p>
            Make your event a memorable one by giving friends and well wishers a chance to contribute to it </h3>
           </div>
           {/* <div className="col-md-6 col2 ">
           <h1>Hello</h1>
           </div> */}
         </div>
         <div className="row buttons">
           <div className="col-md-6 box1 col-sm-12 ">
           <Link style={{color:'white'}} to={{
                 pathname:'/getstarted',
                 state:{
                   page:'getstarted'
                 }
               }}>
               <div className="home_btn1 btn btn-primary">
                Get started  
               </div>
               </Link>
           </div>
           <div className=" col-md-6 box2 col-sm-12 ">
           <Link style={{}} to={{
                 pathname:'/signup',
                 state:{
                   page:'signup'
                 }
               }}>
           <button className="home_btn2 btn-light  btn btn-outline-light my-2 my-sm-0" type="submit"> 
           Sign up now  </button>
           </Link>
             </div>
         </div>

         <Here/>
         <Easy/>
        </div>
        </div>
        </React.Fragment>
             
    )
  }
}
