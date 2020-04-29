import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFileArchive} from '@fortawesome/free-solid-svg-icons'
export default class Links extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
        
      }
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
                <h1 className="text-primary">Record <FontAwesomeIcon icon={faFileArchive} style={
                    {   color:'#007bff',
                        width:40,
                        height:40
                    }
                } /> </h1>
                 {this.props.record.length >0 ? 
                  <div className="row">
                  {
                      this.props.record.map((eachRecord) =>{
                       return(
                          <div key={eachRecord._id} className="col-md-12 col-sm-12">
                          <h4 className="my-4">{eachRecord.eventName}</h4>
                       <h6 h2 className="my-2 text-secondary">Scheduled to hold on <span style={{color:'rgba(0,0,0,0.7)', fontWeight:'bold'}}>{eachRecord.eventDate}</span></h6>
                       <h6  className="my-2 text-primary" style={{fontWeight:'bold', borderBottomColor:'royalblue',borderBottomWidth:2}}>Materials used</h6>
                       <hr/>
                       {
                           eachRecord.items.map((eachItem)=>{
                            return (
                            <p key={eachItem.item._id}>({eachRecord.items.indexOf(eachItem) +1})  {eachItem.item.name}</p>
                            )
                           })
                       }

  
                          <hr/>
                      </div>
                       )
                      })
                  }
               
              </div>
                 :
                
                     <h3 className="text-secondary text-center my-4">No record yet</h3>
                
                 }
               
            </div>
        )
    }
}
