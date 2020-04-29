import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshake , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import EventSample from './EventSample';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class Event extends React.PureComponent{

    componentDidMount(){
      
    }
    render(){
       
        return(
            <React.Fragment>
            <div className='container event' style={{zIndex:1}}>
            <ScrollAnimation animateIn="bounceInLeft">
            <div className="row first">
                <div className="col-md-6 col-sm-6">
                    <div style={{display:'flex'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLix-ygQU4RXrt56I_Ci0J8J9tbmqfPds73aTSGFaWah6l4v1p&usqp=CAU" alt="loading..." />
                    <h2 className="tt">You first</h2>
                    </div>
                   
                  <p>We are always ready to render services at all time with no downtime at all. We are 
                      only happy when you are happy. It is our satisfaction that your event become enormous and quality. Give us the chance to help you.</p>
                </div>
                <div className="col-md-6 col-sm-6 right__">
                <div className="standard_" style={{display:'flex', flexDirection:'row', alignItems:'center'}} >    
                            <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:70,
                                 height:70,
                                 padding:1

                             }}
                            icon={faHandshake} />
                            <h1>Customer Satisfaction</h1>
                        </div>

                        <div className="stand1">
                               
                                <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:25,
                                 height:25,
                             }}
                            icon={faArrowRight} /><h6>
                                We make sure every response is as fast as possible</h6>
                        </div>
                        <div className="stand1">
                               
                                <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:25,
                                 height:25,
                             }}
                            icon={faArrowRight} /><h6>
                               100% perfection</h6>
                        </div>
                        <div className="stand1">
                               
                                <FontAwesomeIcon
                             style={{
                                 color:'#24b47e',
                                 width:25,
                                 height:25,
                             }}
                            icon={faArrowRight} /><h6>
                                Your data is perfectly secured with us</h6>
                        </div>
                        <div className="stand1">
                               
                               <FontAwesomeIcon
                            style={{
                                color:'#24b47e',
                                width:25,
                                height:25,
                            }}
                           icon={faArrowRight} /><h6>
                               No downtime at all</h6>
                       </div>
                        
                        
                
                </div>
            </div>
            </ScrollAnimation>
                <h4 className="text-secondary __get text-center ">GET CONTRIBUTION FROM FRIENDS FOR YOUR EVENTS LIKE</h4>
            <div className="row" >
                <EventSample imageUrls={[
                "https://images.pexels.com/photos/1393475/pexels-photo-1393475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/1777843/pexels-photo-1777843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 "https://cf.ltkcdn.net/weddings/images/orig/245196-1600x1116-groom-giving-gift-to-bride.jpg", "https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]} title="WEDDING CEREMONY"  />
                <EventSample imageUrls={["https://images.pexels.com/photos/6203/food-sweet-cake-candles-6203.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                                        "https://images.pexels.com/photos/410398/pexels-photo-410398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                                        "https://images.pexels.com/photos/851204/pexels-photo-851204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                                         "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
               ]} title="WEDDING"  />
               <EventSample imageUrls={["https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/1186116/pexels-photo-1186116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/450301/pexels-photo-450301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/1387577/pexels-photo-1387577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                       
            
               ]} title="FESTIVAL"  />


               <EventSample imageUrls={["https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/2050976/pexels-photo-2050976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
            ]} title="RETIREMENT"  />

            <EventSample imageUrls={["https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/3453056/pexels-photo-3453056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/1097425/pexels-photo-1097425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
            ]} title="ANNIVERSARY "  />

            <EventSample imageUrls={["https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/161709/newborn-baby-feet-basket-161709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/1557182/pexels-photo-1557182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                         "https://images.pexels.com/photos/34763/baby-sleeping-baby-baby-girl.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
            ]} title="NAMING CEREMONY "  />
          </div>
         <h3 className="text-center mt-4 text-bold text-secondary">and so on.....</h3>

          <div className="row">
          <div className="col-md-6 col-sm-6 ready">
              <h1>Ready to get started?</h1>
              <h2 className="ready_sub">Get in touch or create an account.</h2>
          </div>
          <div className="col-md-4 col-sm-6 ready-btn">
              <div className="btn btn-ready text-uppercase">
              <Link style={{color:'white'}} to={{
                 pathname:'/signup',
                 state:{
                   page:'signup'
                 }
               }}>Start Now</Link>
                  
              </div>
              <div className="btn btn-ready2 text-uppercase">
              <Link style={{color:'inherit'}} to={{
                 pathname:'/contact',
                 state:{
                   page:'contact'
                 }
               }}>contact us</Link>
              </div>
              </div>
          </div>

         
        </div>
        <Footer/>
        </React.Fragment>
        )
    
}
}