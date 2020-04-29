import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
export default class About extends Component {
    render() {
        window.scrollTo(0,0)
        return (
            <React.Fragment>
                <Navbar/>
                <div className="about container">
                    <div className="row">
                       <div className="col-md-12 text-center col-sm-12 ab">
                           <h1>About Planna</h1>
                           <p>Here at Planna we provide a platform that allows you to spice up your event by giving friends and well wishers the chance to contribute to it. We do this by providing them a page to show what you need for your event and allow them pay for anyone they like to help you with.
                               We are so committed to making your event a better and memorable one. We also have a good customer care that you can contact just in case any problem occur or there is something you are not clear with.
                            <br/>

                           </p>
                              
                            
                       </div>

                       <div className="col-md-12 text-center how col-sm-12 ab">
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
