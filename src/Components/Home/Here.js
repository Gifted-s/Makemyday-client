import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift} from '@fortawesome/free-solid-svg-icons'
export default class Here extends React.PureComponent{
    render(){
        return(
            <div  className=" here container ">
                <p style={{textAlign:'center'}}>THE NEW REVOLUTION TO MAKE YOUR EVENT A MEMORABLE ONE</p>
                <ScrollAnimation animateIn="bounceInLeft">
            <div className="row">
               
           
 
            <div style={{display:'flex',flex:1,flexDirection:'column', alignItems:'center'}} className="here_left col-md-6 col-sm-12">
                <div className="here_header">
                    <div className="here-icon">
                    <FontAwesomeIcon style={{height:120, width:120,
                         backgroundColor:'rgba(56, 88, 230,0.09)',
                         padding:23,
                         borderRadius:55,
                         color:'rgba(0,100,230)'}} icon={faGift}/>
                    </div>
                </div>
                <div className="text-center">
                    <h5 style={{fontWeight:'bold',color:'#3297d3', lineHeight:1.5}} className=" mt-3 text-uppercase">Get contribution for your event</h5>

                    <p className="  text-secondary cash_text">
                        Events are one of the scenerios that requires materials the most to hold and a lot of people(friends and well wishers) wish to contribute to your event. However, 
                        how can they do that without knowing what you need for the event ?. This is the problem we solve at Makemyday
                    </p>
                </div>
              

                </div>
               
                {/* <ScrollAnimation animateIn="fadeIn"> */}

              
                <div style={{display:'flex', justifyContent:'center'}} className="here_right col-md-6 col-sm-12">
              
                    <div className="here_right_inner">
                    </div>
                
                </div>
                {/* </ScrollAnimation> */}
               
            </div>
            </ScrollAnimation>

          

            </div>
        )
    }
}