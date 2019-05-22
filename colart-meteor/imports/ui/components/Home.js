import React, { Component } from 'react';
import ArtistCard from './artistcard/ArtistCard';
import ArtistCarousel from './artistcarousel/ArtistCarousel';
import ServiceCard from './services/ServiceCard';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {

    return (
      <div className="Home">
        <div className="text-center">
          <h1>Somos tu manager para impulsar tu carrera artística en la ciudad</h1>
        </div>
        <ArtistCarousel></ArtistCarousel>
        <br></br>
        <div className="text-center">
          <Link className="nav-link" to="/Payment">

            <button type="submit" className="btn btn-info text-center">¡Quiero ser parte de Colart!</button>

          </Link>
        </div>
        <br></br>
        <ArtistCard></ArtistCard>
        <ServiceCard></ServiceCard>

        <div className="text-center mt-5 mb-5">

          <Link className="nav-link" to="/Payment">
            <button type="submit" className="btn btn-info text-center">¡Quiero ser parte de Colart!</button>
          </Link>
        </div>

      </div>
    );
  }
}

export default Home;
