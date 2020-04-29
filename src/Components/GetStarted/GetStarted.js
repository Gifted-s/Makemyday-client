import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
export default class GetStarted extends Component {
    componentDidMount(){
     window.scrollTo(0,0) 
    }
    render() {
        return (
            <React.Fragment>
                <Navbar/>
            <div className="container about">
                 <div className="row">
                   <div className="col-md-12 text-center get col-sm-12 ab">
                   <h1>How it works</h1>
                    <h3 className=" my-2">Working with Planna is very easy, just follow the steps below</h3>
                    <hr/>
                    <p>Register to have an account with us or if you have an account, login to your dashboard page</p>
                    <p>Next, click on the schedule event at the side bar in your dashboard page</p>
                    <p>At the schedule event page, you will perform some operations, like entering the event name, the event date, and this is where you can add the items needed for your event</p>
                    <p>Once you are done, click on the submit button and a link would be generated for you.  </p>
                    <p>This link will contain details about your event </p>
                    <p>You can now share this link with friends and well wishers. </p>
                    <Link style={{}} to={{
                 pathname:'/signup',
                 state:{
                   page:'signup'
                 }
               }}><span className="btn my-4 p-2 btn-primary">
               Join Planner today
           </span></Link> 

                              
                   </div>
            </div>
            <Footer/>
            </div>
            </React.Fragment>
           
        )
    }
}
