import React, { Component } from 'react';
import Crowdfunding from '../Crowdfunding/Crowdfunding';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { metaProperty } from '@babel/types';

class ArtistProfile2 extends Component {
  constructor(){
    super();

    this.state={
      //artist that is in the form
      _id:"", name:"", lastname:"", minidescription:"", description:"", profession:"",
      video:"", picprofile:"", category:"", facebook:"", instagram:"", youtube:""
    }
  }

  handleProfile(){
    <Link className="nav-link" to="/MiPerfil"/>
  }

  deleteProfile(){
    Meteor.call('artists.delete', Meteor.userId());
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
      <div className="ArtistProfile2 container">

        <div className="container">
          <h1 className="text-center" value={this.state.name}></h1>
          <h1 className="text-center" value={this.state.lastname}></h1>
          <br></br>
        
          <div className="row">
            <div className="col-sm">
              <img src={this.state.picprofile} style={styles}></img>         
            </div>
           
            <div className="col-sm">
              <h1>Descripción</h1>
              <p value={this.state.description}></p>
            </div>
          </div>


          <div className="row">
            <div className="col-sm">
            <div>
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
              <button type="button" class="btn btn-info">Editar evento</button>
              <button type="button" class="btn btn-warning">Eliminar evento</button>
              <hr></hr>
              <h5>Fecha: Junio 13, 2019</h5>
              <h5>Homenaje Metallica</h5>
              <h6>Presentación en vivo en Bar Route66</h6>
              <button type="button" class="btn btn-info">Editar evento</button>
              <button type="button" class="btn btn-warning">Eliminar evento</button>
              <hr></hr>
              <button type="button" class="btn btn-info">Agregar evento</button>
            </div>
            <div className="col-sm">
              <iframe width="560" height="315" src={this.state.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

          </div>


          <div className="row">
            <div className="col-sm">
            <button type="button" class="btn-lg btn-info" onClick={this.handleProfile.bind(this)}>Editar Perfil</button>
            <button type="submit" class="btn-lg btn-warning" onSubmit={this.deleteProfile.bind(this)}>Eliminar Perfil</button>            
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

                    <i className="fa fa-facebook-square fa-5x "></i>
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

export default ArtistProfile2;
