import React  from 'react';

import {Link} from 'react-router-dom'

import {  faArrowRight} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.button = React.createRef()
  }
    render(){
        return (
            <React.Fragment>
            <nav  className="navbar navbar-expand-lg  fixed-top navbar-dark  bg-dark">
            <a className="navbar-brand text-primary" href="/"><img alt="loading" src={require('./test.png')}/></a>
            <button ref={this.button} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar-nav justify-content-end ">
                <li className="nav-item active">
                  <Link   onClick={()=> this.button.current.click()} className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                <Link   onClick={()=> this.button.current.click()} className="nav-link" to="/getstarted">Get started <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                 
                <Link   onClick={()=> this.button.current.click()} className="nav-link" to="/about">About Planna<span className="sr-only">(current)</span></Link>
              
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/contact">Contact us <span className="sr-only">(current)</span></a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
               
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <Link 
                to="/signup" 
                onClick={()=> this.button.current.click()}
                style={{fontWeight:"bold"}} className="btn-custom  btn btn-outline-primary  my-2 my-sm-0" type="submit">Sign in
                <FontAwesomeIcon className="all2" style={{height:14, width:14,
                                          color:'#3297d3',
                                          marginLeft:12,
                                          }} icon={faArrowRight}/></Link>
              </form>
            </div>
          </nav>
          </React.Fragment>
        )
    }
   
}

  