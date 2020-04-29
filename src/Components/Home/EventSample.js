import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
export default class EventSample extends React.PureComponent{
   
    render(){
        return(
            
           <div className="col-md-4 col-sm-12">
               <ScrollAnimation animateIn="fadeIn">
                <div className="card" >
                <div id="carouselExampleSlidesOnly"   className="carousel slide" data-ride="carousel">
                        <div   className="carousel-inner">
                            <div  className="carousel-item active">
                                <img src={this.props.imageUrls[0]} className=" img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={this.props.imageUrls[1]} className="d-block img-responsive img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={this.props.imageUrls[2]} className="d-block img-responsive img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={this.props.imageUrls[3]} className="d-block img-responsive img-fluid" alt="..."/>
                            </div>
                        </div>
                        </div>
                    <div className="card-body">
                        <h5 className="card-title"> 
                       {this.props.title}
                        {/* <FontAwesomeIcon className="all2" style={{height:23, width:23,
                                color:'#3297d3',
                                marginLeft:12,
                                }} icon={faArrowCircleRight}/> */}
                                </h5>
                    
                    </div>
                    </div>
                    </ScrollAnimation>
           </div>
        )
    
}
}