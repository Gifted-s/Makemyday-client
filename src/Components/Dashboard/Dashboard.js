import React, { Component } from 'react'
import {Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar';
import swal from 'sweetalert';

const ScheduleEvent = React.lazy(()=> import('./ScheduleEvent'))
const Links = React.lazy(()=> import('./Links'))
const EditProfile = React.lazy(()=> import('./EditProfile'))

const Overview = React.lazy(()=> import('./Overview'));
export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            showSidebar:false,
            presentPage:'home',
            userdata: {}



        }
    }

        componentDidMount() {
        window.scrollTo(0, 0)
        if(!this.props.location.state){
            this.props.history.push('/signup')
        }
        else{
            this.setState({userdata:this.props.location.state.user })       
        }
        
      }
toggle(){
    this.setState({showSidebar: !this.state.showSidebar})
}
changeScreen(screen){
window.scrollTo(0, 0)
this.setState({presentPage:screen})
}
updateDetails(data){
    this.setState({userdata : {...this.state.userdata, ...data}})
    this.props.location.state.user = {...this.state.userdata, ...data}
}
    render() {
       
        const {name, email, phone, bankName, accountNumber} = this.state.userdata
      
     
        return (
            <div className="container-fluid dash">

                {
                    this.state.userdata.email ? 
                    <div className="row">
       

                    {
                       this.state.showSidebar && window.innerWidth <=768 ?
                      
                       <Sidebar name={name} email={email} navigateTo={this.changeScreen.bind(this)}  toggle= {this.toggle.bind(this)}/>
            
                        :
                       window.innerWidth>768 ?
                       <Sidebar name={name} email={email} navigateTo={this.changeScreen.bind(this)} toggle= {this.toggle.bind(this)}/>
                       :
                       null
            
                    }
            
            <div  style={{position: `${window.innerWidth<768 ? "absolute" :'relative'} `}} className="col-md-10 col-sm-3 dashboard_right">
            
            
            <div className="dash_nav">
                 <div className="icon__" style={{float:'left', marginTop:14,marginRight:30}}  >
                   <span className="__icon" onClick={this.toggle.bind(this)}><FontAwesomeIcon style={{width:30, height:27}} icon={faBars} /> 
                   </span>
                   <span style={{fontWeight:'600',color:'white', marginLeft:10}} className="logout_text"> 
                   {name.split(' ')[0]}
                   </span>
                  
                    
                   
                </div>
             
                 <div  style={{float:'right', marginTop:14, marginRight:30}}  className="user">
                    
                   <span onClick={()=> this.changeScreen('edit')}><FontAwesomeIcon icon={faUser} /></span>   <span onClick={()=>{
                    swal({
                        title: "Are you sure?",
                        text: "",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((willDelete) => {
                        if (willDelete) {
                         this.props.history.push('/')
                        } else {
                       
                        }
                    });
                 }} style={{fontWeight:'600', marginLeft:40}} className="logout_text">  logout</span>
                    
                   
                </div>
              
              </div>
            {
                this.state.presentPage === 'home' ?
                 <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }>
                  <Overview change={this.changeScreen.bind(this)} user = {this.state.userdata} name={name} email={email} close={()=>this.setState({showSidebar:false})}/>
                 </React.Suspense>
              
                :
                this.state.presentPage === 'schedule'?
                <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }> <ScheduleEvent _id = {this.props.location.state.user._id} name={this.state.userdata.name} close={()=>this.setState({showSidebar:false})}/>
                 </React.Suspense>
               :
                this.state.presentPage === 'links'?
                <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400,flexDirection:'column', flex:1, display:'flex', justifyContent:'center', alignItems:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }><Links record= {this.state.userdata.record} close={()=>this.setState({showSidebar:false})} /></React.Suspense>
                :
                this.state.presentPage === 'edit'?
                <React.Suspense fallback={
                    <div style={{backgroundColor:'white',height:400, flex:1, display:'flex', justifyContent:'center', alignContent:'center'}} className="container schedule">
                      <div>
                          <Spinner size='large'/>
                      </div>
                    </div>
                 }>
                <EditProfile editProfile = {this.updateDetails.bind(this)} name={name} email={email} phone={phone} bankName={bankName} accountNumber={accountNumber} close={()=>this.setState({showSidebar:false})} />
                </React.Suspense>
                :
            
                null
                
            
            }
            
            
            
            
            
            
            
            
            
            
            
            </div>
            
            
            
            
            
                           </div>
                    :
                    <div style={{backgroundColor:'white',height:400,flexDirection:'column', flex:1, display:'flex', justifyContent:'center', alignItems:'center'}} className="container schedule">
                    <div>
                        <Spinner size='large'/>
                    </div>
                  </div>
                }
            
            </div>
        )
    }
}
