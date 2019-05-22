import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ArtistCarousel extends Component {
  render() {

    var styles={
      textColor:'black',
    };

   
    return (
      <div className="ArtistCarousel">
   <Carousel className="w-50 mx-auto">
  <Carousel.Item className="w-100">
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    
    <Carousel.Caption  className="p-3 mb-2 bg-dark text-white">
      <h3 className="">¡Sabemos que amas lo que haces!</h3>
      <p>Promociona tus eventos para aumentar el alcance de tu publicidad a un público más amplio.</p>
    </Carousel.Caption>
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" 
      src="https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption  className="p-3 mb-2 bg-dark text-white">
      <h3 >¡Disfruta de tus artistas favoritos!</h3>
      <p>Te mantenemos actualizado de los diferentes eventos que realizan los artistas que te gustan.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" 
      src="https://images.pexels.com/photos/1405816/pexels-photo-1405816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption  className="p-3 mb-2 bg-dark text-white">
      <h3 >Plataforma Crowdfunding</h3>
      <p>¡Tus fans quieren que seas el mejor, por eso dan todo su apoyo para que te conviertas en lo que más deseas!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );
  }
}

export default ArtistCarousel;
