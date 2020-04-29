import React, { Component } from 'react'
import swal from '@sweetalert/with-react'
import Clipboard from 'react-clipboard.js';
import firebase from '../../../node_modules/firebase'
import FileUploader from "react-firebase-file-uploader";
import Cart from './Cart';
import {Spinner} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBirthdayCake,faBaby, faPlus,faMinus, faCalendar,faArrowLeft, faCalendarPlus,faUserGraduate, faWindowClose,faArrowRight, faUserCheck,  faRing} from '@fortawesome/free-solid-svg-icons'
export default class ScheduleEvent extends Component {
    constructor(props){
        super(props);
        this.state={
          items: [],
          avatar: "",
          isUploading: false,
          progress: 0,
          avatarURL: "",
            selectedItem:false,
            event:'',
            date:'',
            newCart:{},
            name:'',
            price:0,
            description:0,
            imgUrl:'',
            CartContructor: {},
            cartToArray:[],
            itemNeeded:'',
            page:1,
            changeScreen:false,
            isSubmitted:false,
           
        }
    }
   async componentDidMount(){
      window.scrollTo(0, 0)
      this.setState({CartContructor:Cart})

      const items = await fetch("https://mmdapi.herokuapp.com/devapi/v1/getProducts",{
        method:'Get',
        headers:{
            'Content-type':'application/json'
        }

    })
    .then((response)=>response.json())
    .then(resJson => resJson)
    .catch(err => err.message)

    this.setState({items})
    }
    handleIncrease(id){
      
      const cart = new Cart(this.state.CartContructor)
      cart.increaseByOne(id);
     
      this.setState({CartContructor:cart})
    }

    handleDecrease(id){
   
      const cart = new Cart(this.state.CartContructor)
      cart.reduceByOne(id);
     
      this.setState({CartContructor:cart})
      
    }
    addToCart(obj){
     const {_id} = obj;
     this.setState({selectedItem:true})

     
     const cart = new Cart(this.state.CartContructor)
     cart.addToCart(_id, obj);
    
     this.setState({CartContructor:cart})
    
     
     swal('Selected' , 'Successfully added ' + obj.name , 'success')
    }



    async addItem(){
      window.scrollTo(0, 0)
       if(!this.state.name){
         return  swal('Please enter the name of the item','', "error")
       }
       else if (!this.state.description){
        return  swal('Please enter the description of the item','', "error")
       }
       else if (this.state.price ===0 ){
        return  swal('Please enter the price of the item','', "error")
       }
       else if (!this.state.imgUrl ){
        return  swal('Please upload an image of the item or wait for file update to be completed if you have started uploading ','', "error")
       }
      
    
      
      


        const {name , price , description , imgUrl } = this.state
      const addResponse = await fetch("https://mmdapi.herokuapp.com/devapi/v1/addProduct",{
        method:'Post',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
         name ,
         price,
         description,
         imgUrl
        })

    })
    .then((response)=>response.json())
    .then(resJson => resJson)
    .catch(err => err.message)
     if(addResponse){
       this.setState({items : [ addResponse, ...this.state.items]})
      swal('Item added ', `${this.state.name} has been added to the item of your event`, "success")
      this.setState({page : this.state.page-2})
     }




    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
      this.setState({ isUploading: false });
    };

    handleUploadSuccess = filename => {
      this.setState({ avatar: filename, progress: 100, isUploading: false });
      firebase
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(url => {
          this.setState({ avatarURL: url , imgUrl:url})
        

          
          //make request to server side



      
      });
    };






  async  handleSubmit(e){
      window.scrollTo(0, 0)
        e.preventDefault();
        if(!this.state.date ){
           return swal("Error", "Please select the date for your event", "error");
        }
       else if(this.state.CartContructor.item === {} ){
           return swal("Error", "please select an item or more for your event", "error");
        }
        else{
            this.setState({isSubmitted:true})
           await fetch(`https://mmdapi.herokuapp.com/devapi/v1/handleItem/${this.props._id}`,{
           method:'Post',
           headers:{
               'Content-type':'application/json'
           },
           body: JSON.stringify({
            eventName  :this.state.event,
            eventDate : this.state.date,
            items : this.state.CartContructor.toArray(),
            totalPrice : this.state.CartContructor.totalPrice,
            totalQty : this.state.CartContructor.totalQuantity
           })

       })
       .then((response)=>response.json())
       .then(resJson => resJson)
       .catch(err => err.message)

            this.setState({isSubmitted:false, page : 1})
            swal(
                <div style={{overflowX:'hidden'}}>
                    <h1 className="my-4 text-success">Congratulations {this.props.name}!!!</h1>
                    <p className="text-secondary">We successfully completed your event page</p>

                   
                   <div className=" my-3 text-center">
                   <p className="my-3">Link to page </p>
            <a id="link_text" className="my-3 text-center" href={`/event/${this.props._id}`}>https://makemyday.netlify.app/event/{this.props._id}</a>
                   <div>
                   <button onClick={()=> swal('Link Copied', ' ', 'success')} className="btn-primary btn my-4"> 
                    <Clipboard style={{backgroundColor:'transparent',color:'white', border:'none'}} data-clipboard-text={`https://makemyday.netlify.app/event/${this.props._id}`}>
                    Copy Link
                   </Clipboard>
                   
                   </button> <a href={`/event/${this.props._id}`} className="btn my-4 ml-3 btn-primary"> Visit Page</a>
                   </div>
                 
                   </div>
                    
                    
                </div>
            )

        }
            
    
       
        
       
    }
    render() {
    
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
                {/* <h3>Schedule event</h3> */}
                <form onSubmit={this.handleSubmit.bind(this)}>

               {
                   this.state.page === 1 ?
                   <React.Fragment>
                   <div className="form-group">
                   <label htmlFor="name">
                       Enter the name of your event here e.g Wedding between Shola and Micheal 
                   </label>
                   <input value={this.state.event}  onChange={(e)=> this.setState({event:e.target.value})} type="text" className="form-control" placeholder="Enter event name"/>
               </div>
               <label style={{marginTop:-20}} className="text-center or mr-3">Or simply pick between the following events</label>
               <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}} className="row">
                   <div onClick={()=> {this.setState({event:"Wedding"})
                 swal({
                    title: "Wedding selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'#0093f5'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faRing} />
                               Wedding</h4>
                          </div>
                   </div>
                   <div onClick={()=> {this.setState({event:"Birthday"})
                 swal({
                    title: "Birthday selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'springgreen'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faBirthdayCake} />
                                 Birthday</h4>
                          </div>
                   </div>
                   <div onClick={()=> {this.setState({event:"Naming ceremony"})
                 swal({
                    title: "Naming selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'deeppink'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faBaby} />
                                 Naming</h4>
                          </div>
                   </div>
                   <div onClick={()=> {this.setState({event:"Anniversary"})
                 swal({
                    title: "Anniversary selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}   className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'red'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faCalendarPlus} />
                                 Anniversary</h4>
                          </div>
                   </div>

                   {/* <div onClick={()=> {this.setState({event:"Freedom"})
                 swal({
                    title: "Freedom selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'orange'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faRibbon} />
                                Freedom</h4>
                          </div>
                   </div> */}
                   <div onClick={()=> {this.setState({event:"Retirement"})
                 swal({
                    title: "Retirement selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'cyan'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faUserCheck} />
                                Retirement</h4>
                          </div>
                   </div>
                   <div onClick={()=> {this.setState({event:"Graduation"})
                 swal({
                    title: "Graduation selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'gold'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faUserGraduate} />
                                Graduation</h4>
                          </div>
                   </div>

                   <div onClick={()=> {this.setState({event:"Festival"})
                 swal({
                    title: "Festival selected",
                    text: `Click on the "Continue" button at the bottom of the page to proceed `,
                    icon: "success",
                  });
                }}  className=" outer_card col-md-3 col-sm-4 ">
                          <div style={{backgroundColor:'royalblue'}} className="inner_card inner1">
                             <h4 className="text-center mt-3" style={{color:'white'}}>
                                 <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faCalendar} />
                                Festival</h4>
                          </div>
                   </div>
                   
               </div>
               <button type="button" onClick={()=>{
                 window.scrollTo(0, 0)
                   if(!this.state.event){
                    swal(
                        <div>
                          <h1 style={{color:'deeppink'}}>Sorry</h1>
                          <p>
                           Please type the event name inside the input box or select from the events listed
                          </p>
                        </div>
                      )
                   }
                   else{
                    
                    this.setState({page:this.state.page+1})
                   
                   }
                   
                
            
            }} className="btn btn-primary btn-large mt-4">Continue  <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faArrowRight} /></button>
               </React.Fragment>
                   
                   : 
                











                   <React.Fragment>
                     {
                        this.state.page === 2 ?
                        
                        <React.Fragment>
                        <div className="form-group">
                         <label htmlFor="name">
                            Enter the date for this event
                         </label>
                         <input  onChange={(e)=> {this.setState({date:e.target.value})
                         }
                      
                     } type="date"  placeholder="Enter event name"/>
                     </div>
     
                     <div className="mb-3">
                      
                    <label htmlFor="validationTextarea">Select the materials you need for the event <span className="badge badge-primary ml-2 my-2">No of items selected : {this.state.CartContructor.item ?this.state.CartContructor.totalQuantity :0 }</span><br/>
                      <button type="button" 
                      onClick={()=> this.setState({page:4})}
                      
                      className="btn btn-primary my-2 ml-3">Can't find an item here? click here to add the item yourself</button>  </label>
                     {/* <textarea onChange={(e)=> this.setState({itemNeeded:e.target.value})} className="form-control" id="validationTextarea" placeholder="Input the materials here" required></textarea>
                     <div className="invalid-feedback">
                     Please enter the materials you need for this event.
                     </div> */}
                     <div className="row">
     
     
     
     
     
                    {
                      this.state.items.map((material)=>{
                        return (
                      <div key={material._id}  className="col-md-3 col-sm-6">
                         <div className="card" >
                       <img src={material.imgUrl} className="card-img-top img-fluid card__img" alt="..."/>
                       <div className="card-body">
                         <h5 className="card-title">{material.name}</h5>
                        <p className="card-text">{material.description}</p>
                        <p className="card-text">Price  ₦{material.price}</p>
                         <button type='button' onClick={()=> this.addToCart(material)}  className="btn btn-primary">Select Cake</button>
                       </div>
                     </div>
       
                         </div>
                        )
                      })
                    }
                    
     
     
     
     
     
     
                     </div>
                 </div>
                 {/* {  this.state.isSubmitted?
                 <React.Fragment>
                    
                     <button type="button" onClick={()=>{
     
                     this.setState({isSubmitted:false})
                 
                 }} className="btn  btn-primary btn-large mt-4">  Cancel <FontAwesomeIcon style={{color:'white',marginLeft:10}} icon={faWindowClose} /> </button>
                     
                  <button type="submit"  className="btn btn-primary ml-3 btn-large mt-4" disabled>Please wait....  <Spinner style={{width:20, height:20, marginLeft:10}}/></button>
                   
                
                  </React.Fragment>
                 : */}
                 <React.Fragment>
                 <button type="button" onClick={()=>{
                   window.scrollTo(0, 0); this.setState({page:this.state.page-1})}} 
                   className="btn  btn-primary btn-large mt-4"> <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faArrowLeft} /> Previous page  </button>
                 
                 <button type="button" onClick={()=> {
                   window.scrollTo(0, 0)
                    if(!this.state.date){
                      return  swal('Error', "Please enter the date for your event" , 'error')
                    }
                   
                  else if(!this.state.selectedItem){
                     return  swal('Error', "Please select an item" , 'error')
                   }
                   
                   else{
                    this.setState({page:this.state.page+1})
                   }
                   
                 
                 }} className="btn btn-primary ml-3 btn-large mt-4">Continue  <FontAwesomeIcon style={{color:'white',marginRight:10}} icon={faArrowRight} /></button>
                 </React.Fragment>
                 {/* } */}
                
                 </React.Fragment>








                        :



















                        <React.Fragment>
                        {
                          this.state.page === 3 ?
                          <React.Fragment>
                            <div className="row my-4 mmm">
                            <h5>Increase or decrease the quantity of this material  </h5>
                        <h6 className="total_price" >Total Price <br/><span className="badge badge-secondary p-2">₦{this.state.CartContructor.totalPrice}</span></h6>
                            </div>
                       
                          <div className="row">
                       {
                         this.state.CartContructor.toArray().map((material)=>{
                           
                           return (
                            <div  className="col-md-3 col-sm-6">
                            <div className="card">
                          <img src={material.item.imgUrl} className="card-img-top img-fluid card__img" alt="..."/>
                          <div className="card-body">
                                <h5 style={{fontWeight:'600'}} className="card-title">{material.item.name}</h5>
                              <p className="card-text">{material.item.description}</p>
                              <p className="card-text">Price  ₦{material.price}</p>
                              <p className="card-text">Quantity  <span style={{float:'right'}} className="badge badge-success text-light">{material.qty}</span></p>
                              <div className="btn_shop">
                              <button  type='button' onClick={()=> {
                              
                              this.handleIncrease(material.item._id)
                 
                     
               
                     
                     }}  className="btn btn-primary ">Increase <FontAwesomeIcon style={{color:'white'}} icon={faPlus} /> 1</button>

                      <button type='button' onClick={()=> {
                       
                       this.handleDecrease(material.item._id)
                       
                       }}  className="btn btn-primary ml-2">Reduce <FontAwesomeIcon style={{color:'white'}}  icon={faMinus} />  1 </button>
                              </div>
                           
                          </div>
                        </div>
          
                            </div>
                           )
                         })
                       }
                       
        
                  
        
        
                        </div>

                        {  this.state.isSubmitted?
                 <div className="btn-group">
                    
                     <button type="button" onClick={()=>{
     
                     this.setState({isSubmitted:false})
                 
                 }} className="btn  btn-primary  mt-4">  Cancel <FontAwesomeIcon style={{color:'white',marginLeft:10}} icon={faWindowClose} /> </button>
                     
                  <button type="submit"  className="btn btn-primary ml-3 btn-large mt-4" disabled>Please wait....  <Spinner style={{width:20, height:20, marginLeft:10}}/></button>
                   
                
                  </div>
                 : 
                 <div className="btn-group">
                          
              <button type="button" onClick={()=>{
              window.scrollTo(0, 0)
              this.setState({page:this.state.page -1})
             
             }} className="btn  btn-primary mt-4">  <FontAwesomeIcon style={{color:'white',marginLeft:10}} icon={faArrowLeft} /> Previous  </button>
                 
              <button type="submit"   className="btn btn-primary ml-3 btn-large mt-4" >Submit </button>
               
            
              </div>

                 
                 }
        
        
                        </React.Fragment>
                          
                          :<React.Fragment>
                            {













                              this.state.page===4 ?  
                              <div>
                               <div className="form-group">
                              <label htmlFor="name">
                                 Enter the name of this item
                              </label>
                              <input  onChange={(e)=> {this.setState({name:e.target.value})
                              }
                           
                          } type="text" className="form-control" placeholder="Enter item name"/>
                          </div>    
                          
                          <div className="form-group">
                          <label htmlFor="name">
                             Describe item
                          </label>
                          <input  onChange={(e)=> {this.setState({description:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Give a description for the item here"/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="name">
                             Enter the price fo this item
                          </label>
                          <input  onChange={(e)=> {this.setState({price:e.target.value})
                          }
                       
                      } type="number" className="form-control" placeholder="Enter the price for the item"/>
                      </div>


                      <div className="form-group">
                      <label>Add image file(Image will show here after upload):</label>
          {this.state.isUploading &&
          <div>
           <p style={{fontWeight:'bolder'}}>Uploading image please wait: {this.state.progress}%</p>
          <div className="progress mt-2 mb-2" style={{height: 20}}>
          <div className="progress-bar" role="progressbar" style={{width:`${this.state.progress}%`}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>
         }
          {this.state.avatarURL && <img alt="heoooo" style={{width:126, height:120}} src={this.state.avatarURL} />}
                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
                      </div>

                      <div className="form-group">
                         
                      <input type="button" value="Previous" onClick={()=> this.setState({isUploading:false, page : this.state.page-2})} className=" btn btn-primary" />      <input type="button" value="Submit" onClick={()=> this.addItem()} className=" btn btn-primary" />
                    
                      </div>
                      </div>
                          :
                              
                              null







                            }
                            </React.Fragment>
                        
                        }
                        </React.Fragment>














                        
                     }
                     
            </React.Fragment>
            
               }
              


           
           
               
            </form>
          
            
            </div>
            
        )
    }
}
