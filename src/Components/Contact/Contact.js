import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
export default class Contact extends Component {
    render() {
        window.scrollTo(0,0)
        return (
            <React.Fragment>
            <Navbar/>
            <div className="container about">
                <div className="row">
                   <div className="col-md-12  contact col-sm-12 ab">
                       <h1>Conatct us</h1>
                       {/* <form onSubmit={ this.handleSubmit.bind(this)}> */}
                       <form>
                <div className="form-group">
                          <label htmlFor="name">
                         Enter full name
                          </label>
                          <input  onChange={(e)=> {this.setState({name:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter full name"/>
                </div>
                <div className="form-group">
                          <label htmlFor="name">
                         Email
                          </label>
                          <input  onChange={(e)=> {this.setState({name:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                          <label htmlFor="name">
                        Message
                          </label>
                          <input  onChange={(e)=> {this.setState({name:e.target.value})
                          }
                       
                      } type="text" className="form-control" placeholder="Enter message"/>
                </div>

                <div className="form-group">
                        
                          <input  onChange={(e)=> {this.setState({name:e.target.value})
                          }
                       
                      } type="submit" value="Send message" className="form-control btn btn-primary"/>
                </div>

                <p>Telephone: 08024672263</p>





                </form>


                          
                        
                   </div>

                  
                   
                 
                 </div>
            
            </div>
        </React.Fragment>
        )
    }
}
