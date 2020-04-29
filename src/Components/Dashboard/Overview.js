import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons'
export default class Overview extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
        
      }
    render() {
        
        return (
            
<React.Fragment>
    <div onClick={()=> this.props.close()} className="col-md-12 col-sm-12 right__inner">
        <div className="welcome">
            <h5>Welcome {this.props.name.split(' ')[0]}, are you ready to schedule your first event? follow the following steps </h5>
            <hr/>
        </div>
        <div className="welcome">
            <p>  <FontAwesomeIcon style={{color:'#24b47e ', height:20, width:20}} icon={faHandPointRight} /> If you are on mobile, click on the menu bar and click on the <span onClick={()=> this.props.change('schedule')} style={{color:'#24b47e '}}>"Schedule event"</span> link</p>
            <hr/>
        </div>
        
        <div className="welcome">
        <p> <FontAwesomeIcon style={{color:'#24b47e ', height:20, width:20}} icon={faHandPointRight} /> Fill the forms and add the thing needed for this event</p>
        <hr/>
        </div>
        
        <div className="welcome">
        <p><FontAwesomeIcon style={{color:'#24b47e ', height:20, width:20}} icon={faHandPointRight} /> Once you are done click on the submit button and a link would be generated, you can copy this link and start sharing</p>
        <hr/>
        </div>
        
        <div className="welcome">
        <p> <FontAwesomeIcon style={{color:'#24b47e ', height:20, width:20}} icon={faHandPointRight} /> You can view the links you have by clicking on the "Links generated" at the sidebar</p>
        <hr/>
        </div>

   </div>



















   <div className="col-md-12 col-sm-12 right__inner  right__inner2">
       <div className="row">
       <div className="col-md-6 bottom_left col-sm-12">
           <div className="dash_bottom_header">
           <h5>Most recent event schedule</h5>
           
           </div>
           <hr/> 
           <div className="box1_dash">
               {
                   this.props.user.eventSchedule ?
                <React.Fragment>   
               <h5>{ this.props.user.eventSchedule.eventName}</h5>
               <h6>Event scheduled to hold on : { this.props.user.eventSchedule.eventDate} </h6>
            
               <Link to={"/event/"+this.props.user._id} >
                   <button className="btn btn-primary ">
                   View requirements for this event
                   </button>
                   
               </Link>
                </React.Fragment>
                   
                   : <div className="text-center mt-4">
                       <p>The event you scheduled last will appear here</p>
                   </div>
               }
               
               
          </div>
          
    
      </div>
      <div className="col-md-6 bottom_left bottom_right col-sm-12">
      <div className="dash_bottom_header">
           <h5>Recent Event</h5>
           
           </div>
           <hr/> 
           <div className="box1_dash">
               {
                   this.props.user.record.length > 0 ?
                   <React.Fragment>
                       {
                          this.props.user.record.slice(0,2).map((event)=>{
                             return (
                                 <div>
                                <h6 className="record">{event.eventName} </h6>
                                <p>Sceduled to hold on  {event.eventDate} </p>
                                <hr/>
                                </div>
                             )
                          })
                       }
                     
                     <button onClick={()=> this.props.change('links')} style={{marginTop:10}} className="btn btn-primary ">
                      View record of all events
                     </button>
                   
             
                   </React.Fragment>
                   
                   : <div className=" mt-4">
                   <p>The events you scheduled previously will appear here</p>
               </div>
               }
           
          
          
               
               
          </div>
         
          
      </div>




       </div>
    </div>
    </React.Fragment>
        )
    }
}
