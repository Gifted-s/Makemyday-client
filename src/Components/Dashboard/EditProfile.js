import React, { Component } from 'react'
import {Spinner} from 'reactstrap'
import swal from '@sweetalert/with-react'
export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            phone:'',
            bankName:'',
            accountNumber:'',
            saving:false


        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        
      }
   async handleSubmit(e){
        e.preventDefault()
        this.setState({saving:true})
       const {
        name ,
        phone,
        bankName,
        accountNumber
       } = this.state
        const editResponse = await fetch("https://mmdapi.herokuapp.com/devapi/v1/edit",{
           method:'Post',
           headers:{
               'Content-type':'application/json'
           },
           body: JSON.stringify({
            name : name || this.props.name ,
            phone : phone || this.props.phone,
            email: this.props.email,
            bankName : bankName || this.props.bankName,
            accountNumber : accountNumber || this.props.accountNumber
           })

       })
       .then((response)=>response.json())
       .then(resJson => resJson)
       .catch(err => err.message)
        if(editResponse){
           
            this.props.editProfile(editResponse)
            swal('Pofile updatded', '', 'success')
            this.setState({saving :false})
        }
        

        
    }
    render() {
        return (
            <div onClick={()=> this.props.close()} style={{backgroundColor:'white'}} className="container schedule">
                <h3>Edit profile</h3>
                <form onSubmit={ this.handleSubmit.bind(this)}>
                <div className="form-group">
                          <label htmlFor="name">
                          Full name:   {this.props.name}
                          </label>
                          <input  onChange={(e)=> {this.setState({name:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter new name here"/>
                </div>


                <div className="form-group">
                          <label htmlFor="name">
                           Email:  {this.props.email}
                          </label>
                          <input  onChange={(e)=> {this.setState({price:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="You can't change this" disabled/>
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Phone number:+234 {this.props.phone}
                          </label>
                          <input  onChange={(e)=> {this.setState({phone:e.target.value})
                          }
                       
                      } type="number" className="form-control" placeholder="Enter new phone number" />
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Bank name: {this.props.bankName}
                          </label>
                          <input  onChange={(e)=> {this.setState({bankName:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter bank name here"/>
                </div>

                <div className="form-group">
                          <label htmlFor="name">
                             Account number: {this.props.accountNumber}
                          </label>
                          <input  onChange={(e)=> {this.setState({accountNumber:e.target.value})
                          }
                       
                      } type="number" className="form-control" placeholder="Enter account number here" />
                </div>
                <div>
                {
                    this.state.saving?<button className="btn btn-primary form-control my-2" type="submit" disabled>Please wait.... <Spinner style={{color:'white', width:20, height:20}}/></button> :<button  className="btn btn-primary form-control my-2" type="submit">Save</button>
                }
               
                </div>
                </form>
                
            </div>
        )
    }
}
