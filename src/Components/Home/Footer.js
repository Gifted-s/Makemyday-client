import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default class Footer extends React.PureComponent{
    render(){
        return(
            <div  className="container-fluid footer">
                
                <hr/>
                <div className="row">
                   <div className="col-md-3 col-sm-12">
                       <h3 className="planner_logo">MMD</h3>
                   </div>
                   <div className="col-md-3 col-sm-12">
                          <h5>Company</h5>
                          <Link to="about" className="footer_list_item">
                           <div>
                                About
                            </div>
                           </Link>
                           <Link to="/getstarted" className="footer_list_item">
                           <div>
                                Get started
                            </div>
                           </Link>
                            {/* <div className="footer_list_item">
                                Jobs
                            </div> */}
                  </div>
                  <div className="col-md-3 col-sm-12">
                      <h5>Resources</h5>
                      <Link to="/policy" className="footer_list_item">
                           <div>
                               Policy and terms
                            </div>
                           </Link>
                           <Link to="/support" className="footer_list_item">
                           <div>
                                Support
                            </div>
                           </Link>
                 </div>
                 <div className="col-md-3 col-sm-12">
                        <h5>Contact</h5>
                        
                        <div className="footer_list_item">
                            Telephone +2348024672263
                        </div>
                        <a href="#top">
                        <div className="top_icon">
                            <FontAwesomeIcon
                             style={{
                                 color:'#3297d3',
                                 width:60,
                                 height:60,
                                 padding:1

                             }}
                            icon={faArrowCircleUp} />
                        </div>
                        </a>
                        
                  
                 </div>
                       
                </div>
                
            <p style={{textAlign:'center', marginTop:70, color:'#8898aa'}}>© 2020 Planna, inc</p>
            </div>
        )
    }
}