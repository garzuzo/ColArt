import React, { Component } from 'react';
import '../../../src/App.css';
import {
  Carousel
  } from 'antd';
import {Link} from  'react-router-dom';


class CarouselF extends Component {

 render() {
   var  owner="Leonardo";
   return (
    <div className="CarouselF">
        <Carousel autoplay style={{width:70}}>
          <div>
            <img alt="example" src="https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: 1180 }}></img>
          </div>
          <div>
          <img alt="example" src="https://images.pexels.com/photos/952422/pexels-photo-952422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: 1180 }}></img>
          </div>
          <div>
          <img alt="example" src="https://images.pexels.com/photos/1405816/pexels-photo-1405816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: 1180 }}></img>
          </div>
     
        </Carousel>
    </div>
   );
 }
}

export default CarouselF;