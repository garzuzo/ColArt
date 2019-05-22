import React, { Component } from 'react';
import Crowdfunding from '../Crowdfunding/Crowdfunding';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ArtistProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    var styles = {
      width: '300px',
      height: '300px',
      //borderRadius: '150px',
      marginLeft: '10px',
    };

    var icons = {
      fontSize: "50",
      textColor: 'black'
    }


    var video = {
      width: '320px',
      height: '240px'
    };
    return (
      <div className="ArtistProfile container">




        <div className="container">
          <h1 className="text-center">Daniel Quintero</h1>
          <br></br>
        
          <div className="row">
            <div className="col-sm">
              <img src="https://images.pexels.com/photos/1425297/pexels-photo-1425297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={styles}></img>
         
            </div>
           
            <div className="col-sm">

              <h1>Descripción</h1>
              <p>Me apasiona la música desde el vientre de mi madre. He soñado que con la letra de mis canciones. <br></br>
                Las personas se conecten conmigo y disfruten la vida de otra manera con la melodía de mi guitarra.</p>
            </div>




          </div>


          <div className="row">
            <div className="col-sm">
            <div>
              <i className="fa fa-retweet fa-4x text-info mr-4"></i> 
              <i className="fa fa-star text-warning fa-3x"></i>
              <i className="fa fa-star text-warning fa-3x"></i>
              <i className="fa fa-star text-warning fa-3x"></i>
              <i className="fa fa-star text-warning fa-3x"></i>
              <i className="fa fa-star-half-o text-warning fa-3x"></i>
              </div>
              <h2><i className="fa fa-calendar"></i>Próximos Eventos</h2>
              <h5>Fecha: Mayo 12, 2019</h5>
              <h5>Celebración Día de la Madre</h5>
              <h6>Presentación en vivo en Hotel Dann Carlton</h6>
              <hr></hr>
              <h5>Fecha: Junio 13, 2019</h5>
              <h5>Homenaje Metallica</h5>
              <h6>Presentación en vivo en Bar Route66</h6>
              <hr></hr>

            </div>
            <div className="col-sm">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hXQxSi34GWY?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>

          </div>


          <div className="row">
            <div className="col-sm">

            </div>


            <div className="col-sm">

              <div className="row">
                <div className="col-sm">
                  <Button variant="light btn-lg" onClick={this.handleShow}>
                    <i className="fa fa-credit-card fa-5x"></i> ¡Apoyame!
  </Button>

                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Crowdfunding</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <Crowdfunding /> </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Cerrar
            </Button>
                      <Button variant="primary" onClick={this.handleClose}>
                        Aceptar
            </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="col-sm">

                  <div className="float-right" >

                    <i className="fa fa-facebook-square fa-5x " ></i>
                    <i className="fa fa-instagram fa-5x"></i>
                    <i className="fa fa-youtube fa-5x margin-left"></i>
                   
                  </div>
                </div>
              </div>




            </div>





          </div>

        </div>
      </div>
    );
  }
}

export default ArtistProfile;
