import React from 'react'
import Event from './Event';
import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faList, faArrowRight} from '@fortawesome/free-solid-svg-icons'
export default class Easy extends React.PureComponent{
    render(){
        return(
            <React.Fragment>
            <div style={{ justifyContent:'center'}} className="easy">
               
               <h2  className="text-center">
                   We make everything easy
               </h2>
                <div className="row">
              
               <div  style={{overflow:'hidden'}}  className="easy1 col-md-6 easy_left">
               <ScrollAnimation animateIn="fadeIn">
               <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'#24b47e',
                         padding:23,
                         float:'left',
                         color:'white',
                         marginLeft:-20,
                         borderRadius:58,
                         }} icon={faLink}/>
                         <div className="link_text">
                         <h5 className='link_ text-uppercase' style={{color: '#24b47e'}}>All you need is a link
                         <FontAwesomeIcon style={{height:15, width:15,
                         color:'#24b47e',
                         
                         marginLeft:20,
                        
                         }} icon={faArrowRight}/></h5>
                       
                         <p >
                        <span className="all">We</span> make everything as easy possible. 
                         All you have to do is to create an account with us follow the required procedures and then at the end, a link to a page that contains
                         the materials you need for the event will be given to you. You can share this link with anyone wishing to contribute to your event

                         </p>
                         </div>
                         </ScrollAnimation>
               </div>
              
              
               <div  style={{overflow:'hidden'}}  className="easy1 col-md-6 easy_right">
               <ScrollAnimation animateIn="bounceInRight">
               <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'#3297d3',
                         padding:23,
                         float:'left',
                         color:'white',
                         marginLeft:-20,
                         borderRadius:58,
                         }} icon={faList}/>
                         <div className="link_text">
                         <h5 className='link_ text-uppercase' style={{color: '#3297d3'}}>All you have to do is
                         </h5>
                       
                        
                         
                        <div>
                            <p>
                            <FontAwesomeIcon className="all2" style={{height:15, width:15,
                         color:'#3297d3',
                         marginRight:12,
                         
                         
                        
                         }} icon={faArrowRight}/>
                         Sign up or if you have <span className="all">an</span> account, Login to your dashboard 
                            </p>
                        </div>

                        <div>
                            <p>
                            <FontAwesomeIcon style={{height:15, width:15,
                         color:'#3297d3',
                         marginRight:12,
                         
                         
                        
                         }} icon={faArrowRight}/>
                        Click on the <span style={{color:'#3297d3'}}>"schedule event"</span> link at the sidebar and fill in the neccesary information
                            </p>
                        </div>

                        <div>
                            <p>
                            <FontAwesomeIcon style={{height:15, width:15,
                         color:'#3297d3',
                         marginRight:12,
                         
                         
                        
                         }} icon={faArrowRight}/>
                        Once you are done, click the submit button and a link would be generated
                            </p>
                        </div>

                        <div>
                            <p>
                            <FontAwesomeIcon style={{height:15, width:15,
                         color:'#3297d3',
                         marginRight:12,
                         
                         
                        
                         }} icon={faArrowRight}/>
                         You can now share this link with friends and well wishers.
                            </p>
                        </div>
                         </div> 
                         </ScrollAnimation>
                        
               </div>

              
               <Event/>
               </div>
             
            </div>
          
            </React.Fragment>
        )
    }
}