import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Categories extends Component {
  render() {
    var styles = {
      width: '350px',
      height: '350px',
     // borderRadius: '150px',
    //  marginLeft: '25px',

    };

    var withoutPadding = {
      padding: '0'
    };
    var hide = {
      display: 'none'
    }
    return (
      <div className="Categories text-center">
        <h1>Conoce los diferentes tipos de entretenimiento artístico y cultural</h1>

        <div className="container">

          <div className="row">

            <div className="col-sm">

              <Link className="nav-link" to="/Category">

                <img  style={styles} src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Música</h3>
                <h6>¡Descubre a los mejores talentos músicales!</h6>

              </Link>


            </div>

            <div className="col-sm">
              <Link className="nav-link" to="/Category">
              <img  style={styles} src="https://images.pexels.com/photos/1882309/pexels-photo-1882309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              
                  <h3>Pintura</h3>
                  <h6>¡Conoce las obras artísticas más auténticas!</h6>
            
              </Link>
            </div>
          </div>


          <div className="row">

            <div className="col-sm">
              <Link className="nav-link" to="/Category">
              <img  style={styles} src="https://images.pexels.com/photos/1028957/pexels-photo-1028957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              
                  <h3>Teatro</h3>
                  <h6>¡Experimenta los expertos en artes escénicas!</h6>
              
              </Link>
            </div>

            <div className="col-sm">
              <Link className="nav-link" to="/Category">
              <img style={styles}  src="https://images.pexels.com/photos/576801/pexels-photo-576801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              
                  <h3>Danza</h3>
                  <h6>¡Baila, Baila y no pares de bailar con los mejores bailarines!</h6>
           
              </Link>
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default Categories;
