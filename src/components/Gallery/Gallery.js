import React, { Component } from "react";
import Slider from "react-slick";
import * as Icon from "react-feather";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      focusOnSelect: false,
      arrows: false
    };
    return (
      <div className="Gallery">
        <button className="Arrow Left" onClick={this.previous}>
          <div/>
        </button>
        <button className="Arrow Right" onClick={this.next}>
        <div/>
        </button>
         <Slider 
         ref={c => (this.slider = c)} 
         {...settings}
         >
         <div>
            <div className="Slide">
              <h3>Momentum Wireless</h3>
            </div>
         </div>
         
          <div>
            <div className="Slide">
              <h3>Another thing</h3>
            </div>

          </div>
  
        </Slider>
      </div>
    );
  }
}

export default Gallery;
