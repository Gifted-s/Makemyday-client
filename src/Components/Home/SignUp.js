import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {  faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'
import {Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';
export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            signin:true,
            name:'',
            errorIndex:[],
            loginErrorIndex:[],
            password:'',
            passwordForLogin:'',
            password2:'',
            email:'',
            emailForLogin:'',
            phone:'',
            bankName:'',
            getMail:false,
            accountNumber:'',
            showSpinner1:false,
            showSpinner2:false,
            tries:0


        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
    }
  
    handleSignup(e){
        this.setState({tries : this.state.tries+1})
        e.preventDefault()
        const errors=[];
        if(!this.state.email){
           errors.push('email')
        }
        if(!this.state.name){
            errors.push('name')
        }
        if(!this.state.password){
            errors.push('password')
        }
        if(!this.state.phone){
            errors.push('phone')
        }
        // if(!this.state.bankName){
        //     errors.push('bankName')
        // }
        // if(!this.state.accountNumber){
        //     errors.push('accountNumber')
        // }
        if(this.state.password !== this.state.password2 ){
            errors.push('notMatch')
        }
        if(!this.state.getMail ){
           swal('' ,'Please accept our terms and ploicy before submitting ' , 'error')
           errors.push('noPolicy')
        }
        this.setState({errorIndex:errors})

        if(errors.length===0){
            this.setState({showSpinner2:true})
            this.makeSignupReq()
            
        }
        
    }
    async makeSignupReq(){
       const {name ,
        password,
        email,
        phone,
        bankName,
        getMail,
        accountNumber}
        = this.state
      
       const signupBody = await fetch("https://mmdapi.herokuapp.com/devapi/v1/signup",{
           method:'Post',
           headers:{
               'Content-type':'application/json'
           },
           body: JSON.stringify({
            name ,
            password,
            email,
            phone,
            bankName,
            getMail: "true",
            accountNumber,
            retries:this.state.tries
           })

       })
       .then((response)=>response.json())
       .then(resJson => resJson)
       .catch(err => err.message)
       if(signupBody.error){
           this.setState({showSpinner2:false})
       swal('', signupBody.error, 'error')
       }
       else{
        this.setState({name:'', password:'', email :'' , phone:null, bankName:'',accountNumber:'', showSpinner2:false,getMail:'' })
        swal(signupBody.message, 'You can login after doing this', 'success')
        this.setState({signin:true})
       }
       
    }

    handleLogin(e){
        e.preventDefault()
        const errors=[];
        if(!this.state.emailForLogin){
           errors.push('loginEmailError')
        }
        if(!this.state.passwordForLogin){
            errors.push('loginPasswordError')
        }
        this.setState({loginErrorIndex:errors})
        if(errors.length===0){
            this.setState({showSpinner1:true})
            this.makeSigninReq()
        }
       
    }
    async makeSigninReq(){
        const  {
         passwordForLogin,
         emailForLogin,
        }
         = this.state
        const signinBody = await fetch("https://mmdapi.herokuapp.com/devapi/v1/signin",{
            method:'Post',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                passwordForLogin,
                emailForLogin,
            })
 
        })
        .then((response)=>response.json())
        .then(resJson => resJson)
        .catch(err => err.message)
 
        console.log(signinBody)
        if(signinBody.error){
         this.setState({showSpinner1:false})
         return swal('', signinBody.error, 'error')
        }
        else if (signinBody === "Failed to fetch"){
            this.setState({showSpinner1:false})
            return swal('', 'we could not access the server try again and ensure internet connection is on', 'error')
        }
        else{
            this.props.history.push({pathname: '/dashboard',state:{user : signinBody}})
        }
       
        // console.log(signupBody)
     }
     sendMail(){
         console.log(this.state.email)
         swal({
            text: 'Enter your email address',
            content: "input",
            button: {
              text: "Submit",
              closeModal: true,
            },
          })
          .then( async(email) => {
            swal('loading, please wait...', 'if you dont get a response has soon as possible, click OK and retry' , 'info')
             const result = await fetch('https://mmdapi.herokuapp.com/devapi/v1/forgot', {
                 method: "Post",
                 headers : {
                     "Content-type" : 'application/json'
                 },
                 body: JSON.stringify({
                     email
                 })
             })
             .then(res=> res.json()).then(resJson => resJson).catch(err => err)
             swal('loading, please wait...', '...' , 'info')
             if(result.error){
                 swal('', result.error, 'error')
             }
             if(result.accepted){
                 swal('', 'A message has been sent to your email. Please kindly check it out','success')
             }
             if(result.errno){
                swal('', 'An error occured while we are sending an email to you, please checkout your network connection and try again', 'error')
             }
             
           
          })

         
          
     }

 
    
    
    render() {
     const   {errorIndex} = this.state
        return (
           <React.Fragment>
               
               <div style={{height:300}} className=" signup_container container-fluid">
                 <div className="row">
                     <div className="col-md-6 signup_left">
                     </div>
                     <div className="col-md-6 signin">
                         <div className="des" >
                     </div>
                         
                    <div className="col-md-8 col-sm-12 sf">
                        <Link className="logo__" to="/" style={{textDecorationWidth:0,borderBottomColor:'white' ,borderBottom:'none'}}><h3 className="text-center sl">MMD</h3></Link> 
                          {
                              !this.state.signin || this.props.location.state ?

                        <React.Fragment>
                            <ScrollAnimation animateIn="bounceInLeft">
                         <p className="signin-text">Create your MMD account</p>
                         {
                                    !this.state.showSpinner2 &&
                         <p style={{cursor:'pointer'}} className="text-secondary mr-3">
                             
                             Already have an account? {
                                 this.props.location.state ?<Link to='/signup'>Login</Link>
                                 :
                                 <span onClick={()=>{
                           
                                    this.setState({signin:true})
                                    
                                 }} style={{color:'#3297d3', fontWeight:'500'}} > Login</span>
                             } </p>}
                         <form className="si_form" onSubmit={this.handleSignup.bind(this)}>
                         <div className="form-div">
                           <label htmlFor="email" >
                               Full name
                           </label>
                           <input onChange={(e)=>this.setState({name:e.target.value})} autoFocus placeholder="Enter your full name" type="text" className="form-control" id="firstname" />
                           {errorIndex.includes('name') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter your first name</small>}
                         </div>



                         <div className="form-div">
                           <label htmlFor="email" >
                               Email
                           </label>
                           <input autoCorrect={false} onChange={(e)=>this.setState({email:e.target.value})} placeholder="Enter your email" type="email" className="form-control" id="email" />
                           {errorIndex.includes('email') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter your email</small>}
                           
                         </div>
                         <div className="form-div">
                           <label htmlFor="phone" >
                               Password
                           </label>
                           <input onChange={(e)=>this.setState({password:e.target.value})} placeholder="Enter password" type="password" className="form-control" id="password" />
                           {errorIndex.includes('password') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter password</small>}
                         </div>
                         <div className="form-div">
                           <label htmlFor="phone" >
                            Re-enter password
                           </label>
                           <input onChange={(e)=>this.setState({password2:e.target.value})}  placeholder="Retype password" type="password" className="form-control" id="password3" />
                           {errorIndex.includes('notMatch') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> The password does not match</small>}
                         </div>

                         <div className="form-div">
                           <label htmlFor="phone" >
                               Phone Number
                           </label>
                           <input onChange={(e)=>this.setState({phone:e.target.value})} placeholder="Enter your phone number" type="number" className="form-control" id="phone" />
                           {errorIndex.includes('phone') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter your phone number</small>}
                         </div>
{/* 
                         <div className="form-div">
                           <label htmlFor="bank" >
                               Bank Name
                           </label>
                           <input onChange={(e)=>this.setState({bankName:e.target.value})}  placeholder="Enter your bank name e.g. firstbank" type='text' className="form-control" id="bank" />
                           {errorIndex.includes('bankName') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter your bank name</small>}
                         </div>

                         <div className="form-div">
                           <label htmlFor="bankNo" >
                               Account number
                           </label>
                           <input onChange={(e)=>this.setState({accountNumber:e.target.value})} placeholder="Enter your account number" type='number' className="form-control" id="bankNo" />
                           {errorIndex.includes('accountNumber') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter your account number</small>}
                         </div> */}
                         <div className="form-div">
                         
                          
                           <label htmlFor="bank" style={{marginTop:30}} >
                        By clicking on this check box, you accept all the terms and policy from Planna
                           </label>
                           <input style={{bottom:90,position:'absolute', width:20, height:20}}  className="form-check-input" type="checkbox" onChange={(e)=>this.setState({getMail:!this.state.getMail})} id="defaultCheck1"/>
                         </div>
                         

                         <div className="form-div">
                             {
                                 this.state.showSpinner2 ?
                                 <button   className="form-control btn" disabled>Please wait.... {this.state.showSpinner2 && <Spinner style={{width:20, height:20, float:'right'}} size="small"/>}  </button>
                                 :
                                 <button   className="form-control btn" >Submit </button>
                             }
                          
                         </div>
                         </form>
                            </ScrollAnimation>
                         </React.Fragment>
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              :
                            
                              <React.Fragment>

                                  {
                                      this.state.signin ?
                                      <ScrollAnimation  animateIn="fadeIn">
                                      <p className="signin-text">Login to your Planna account</p>
                                      {
                                            !this.state.showSpinner1 &&
                                      <p style={{cursor:'pointer'}} className="text-secondary mr-3">Dont have an account?
                                      
                                        
                                            <span onClick={()=>{
                                        
                                                this.setState({signin:false})
                                                
                                             }} style={{color:'#3297d3', fontWeight:'500'}} > Sign up</span>
                                      </p>}
                                      <form className="si_form" onSubmit={this.handleLogin.bind(this)}>
                                     
             
                                      <div className="form-div">
                                        <label htmlFor="email2" >
                                            Email
                                        </label>
                                        <input id='email2' onChange={(e)=>this.setState({emailForLogin:e.target.value})} autoFocus placeholder="Enter your email" type="email" className="form-control" />
                                        {this.state.loginErrorIndex.includes('loginEmailError') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter email</small>}
                                        
                                      </div>
                                      <div className="form-div">
                                        <label htmlFor="password2" >
                                        Password
                                        </label>
                                        <input id="password2" onChange={(e)=>this.setState({passwordForLogin:e.target.value})}  placeholder="Enter your password" type="password" className="form-control" />
                                        {this.state.loginErrorIndex.includes('loginPasswordError') && <small style={{color:'red',marginTop:15, marginBottom:15}}><FontAwesomeIcon icon={faInfoCircle} style={{color:'red'}}/> Enter password</small>}
                                        
                                      </div>
                                      <div className="form-div">
                                    <small  onClick={()=> {
                                        this.sendMail()
                                        
                                    }}  className="text-primary float-right my-3 ml-2">forgot password?</small>





                                    {/* <div className="modal forgot fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalCenterTitle">Email</h5>
                                            <button className="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                        <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Enter your email</label>
                                        <input onChange={(e)=>this.setState({email: e.target.value})} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        
                                    </div>
                                    </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button onClick={()=> this.sendMail} type="button" className="btn btn-primary">Submit</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div> */}
                                                                            
                                      </div>
             
                                     
                                      
             
                                      <div className="form-div">
                                      {
                                         this.state.showSpinner1 ?
                                         <button   className="form-control btn" disabled>Please wait.... {this.state.showSpinner1 && <Spinner style={{width:20, height:20, float:'right'}} size="small"/>}  </button>
                                         :
                                         <button   className="form-control btn" >Submit </button>
                                     }
                                      </div>
                                      </form>
                                      </ScrollAnimation>
                                      :
                                         null
                                  }



                                
                              </React.Fragment>
                              
                          }




                         </div>
                         
                         
                     </div>
                 </div>
               </div>
           </React.Fragment>
        )
    }
}
