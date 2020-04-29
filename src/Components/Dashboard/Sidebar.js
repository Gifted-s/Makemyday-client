import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome ,faWindowClose,faLink, faPen, faTasks} from '@fortawesome/free-solid-svg-icons'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-2 col-sm-3 sidebar">
                {window.innerWidth <=768 ?
                <div onClick={()=>this.props.toggle()} className="close_btn"  style={{float:'right'}}>
                <FontAwesomeIcon style={{width:25, height:25, color:'#3297d3'}} icon={faWindowClose}/>
            </div> :null}
            
        <h3 className="dash_logo">MMD</h3> 
        <div className="cd">
                <h5>{this.props.name}</h5>
            <p>{this.props.email}</p>
            
        </div>
        <div 
        onClick={()=>{
            this.props.navigateTo('home')
            this.props.toggle()

        }}
        
        className=" sidebar_item">
           
               <FontAwesomeIcon icon={faHome} /> <span className="sidebar_text">Home</span>
           
        </div>

        <div onClick={()=>{
            this.props.navigateTo('schedule')
            this.props.toggle()

        }} className="sidebar_item">
           
        <FontAwesomeIcon icon={faTasks} /> <span className="sidebar_text">Schedule Event</span>  
       
        </div>
      
       <div onClick={()=>{
            this.props.navigateTo('links')
            this.props.toggle()

        }} className="sidebar_item">
           
           <FontAwesomeIcon icon={faLink} /> <span className="sidebar_text">Records</span>
       
       </div>
       <div
       onClick={()=>{
        this.props.navigateTo('edit')
        this.props.toggle()

        }}
       
       className="sidebar_item">
           
           <FontAwesomeIcon icon={faPen} /> <span className="sidebar_text">Edit Profile</span>
       
       </div>
       
</div>
        )
    }
}
