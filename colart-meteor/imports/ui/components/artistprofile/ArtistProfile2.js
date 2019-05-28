import React, { Component } from 'react';
import Crowdfunding from '../Crowdfunding/Crowdfunding';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { metaProperty } from '@babel/types';

class ArtistProfile2 extends Component {
  constructor(props){
    super(props);

    this.state={
      //artist that is in the form
      _id:"", name:"dani", lastname:"", minidescription:"", description:"", profession:"",
      video:"", picprofile:"https://images.pexels.com/photos/1425297/pexels-photo-1425297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category:"", facebook:"", instagram:"", youtube:""
    }
  }

  componentWillMount(){

    let artist=this.props.artist;
    //console.log(artist)
    if(artist && artist.artist){
      this.setState({lastname:artist.artist.lastname})
       this.setState({minidescription:artist.artist.minidescription})
      this.setState({name:artist.artist.name})
    }
   // this.setState({lastname:artist.artist.lastname})
   // this.setState({minidescription:artist.artist.minidescription})


  }

  handleProfile(){
    //<Link className="nav-link" to="/MiPerfil"/>
    window.location = '/MiPerfil';
  }

  deleteProfile(){
    Meteor.call('artists.delete');
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
          <h1 className="text-center" >{this.state.name} {this.state.lastname}</h1>
         
          <br></br>
        
          <div className="row">
            <div className="col-sm">
              <img src={this.state.picprofile} style={styles}></img>         
            </div>
           
            <div className="col-sm">
              <h1>Descripción</h1>
              <p >{this.state.description}</p>
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
              <button type="button" className="btn btn-info">Editar evento</button>
              <button type="button" className="btn btn-warning">Eliminar evento</button>
              <hr></hr>
              <h5>Fecha: Junio 13, 2019</h5>
              <h5>Homenaje Metallica</h5>
              <h6>Presentación en vivo en Bar Route66</h6>
              <button type="button" className="btn btn-info">Editar evento</button>
              <button type="button" className="btn btn-warning">Eliminar evento</button>
              <hr></hr>
              <button type="button" className="btn btn-info">Agregar evento</button>
            </div>
            <div className="col-sm">
              <iframe width="560" height="315" src={this.state.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

          </div>


          <div className="row">
            <div className="col-sm">
            <button type="button" className="btn-lg btn-info" onClick={this.handleProfile.bind(this)}>Editar Perfil</button>
            <button type="submit" className="btn-lg btn-warning" onSubmit={this.deleteProfile.bind(this)}>Eliminar Perfil</button>            
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

                    <a src={this.state.facebook}><i className="fa fa-facebook-square fa-5x "></i></a>
                    <a src={this.state.instagram}><i className="fa fa-instagram fa-5x"></i></a>
                    <a src={this.state.youtube}><i className="fa fa-youtube fa-5x margin-left"></i></a>
                    
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
