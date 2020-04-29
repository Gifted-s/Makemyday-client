import React, { Component } from 'react'
import swal from '@sweetalert/with-react'

import firebase from '../../../node_modules/firebase'
import FileUploader from "react-firebase-file-uploader";
import { } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Home/Navbar';
export default class AdminPage extends Component {

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
            link:''
        }
    }
   async componentDidMount(){
      window.scrollTo(0, 0)
     

      const items = await fetch("https://mmdapi.herokuapp.com/devapi/v1/getProducts",{
        method:'Get',
        headers:{
            'Content-type':'application/json'
        }

    })
    .then((response)=>response.json())
    .then(resJson => resJson)
    .catch(err => err.message)
    console.log(items)
    this.setState({items})







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
      swal('Item added ', `${this.state.name} has been added`, "success")
      this.setState({page : this.state.page-2})
      this.setState({name:'', price:'', description:'', imgUrl : ''})
     }




    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
      this.setState({ isUploading: false });
      console.error(error);
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

      });
    };







    render() {
    
        return (
          <React.Fragment>
            <Navbar/>
            <div  style={{backgroundColor:'white'}} className="container adminform ">
              <h3 className="text-center">Admin page</h3>

                  <div className="btn btn-group">
                   <div onClick={()=> this.setState({page : 1})}  className="btn  btn-primary">
                     View Products
                    </div>
                    <div onClick={()=> this.setState({page : this.state.page + 1})} className="btn ml-1 btn-primary">
                    Add Products
                    </div>
                   
                  </div>
                  <hr/>
                  
                 
                     <div className="row">
                      
                      
                        {this.state.page ===1 ?
                        <React.Fragment>
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
                        </React.Fragment>
          :
          
          
          <div className="adminaddform"  >
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
          
          
          
          
          }
                      
     
     
                    
                     </div>
                

                
                         
                    </div>
                </React.Fragment>
                       
    
           
        )
    }
}
