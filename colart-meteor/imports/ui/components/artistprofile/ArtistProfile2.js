import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProfileForm  from './ProfileForm';
import EventsList from '../events/EventsList';
import EventForm from '../events/EventForm'

class ArtistProfile2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //artist that is in the form
      _id: "", name: "Holaaaaaaa", lastname: "", minidescription: "", description: "", profession: "",
      video: "https://www.youtube.com/embed/8zQTfGbyY5I?autoplay=1", picprofile: "", category: "", facebook: "", instagram: "", youtube: "",
      show: false, showEvent: false
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleCloseEvent() {
    this.setState({ showEvent: false });
  }

  handleShowEvent() {
    this.setState({ showEvent: true });
  }
  componentDidMount() {

    this.setState({
      name: this.props.artist.artist.name,
      lastname: this.props.artist.artist.lastname,
      minidescription: this.props.artist.artist.minidescription,
      description: this.props.artist.artist.description,
      profession: this.props.artist.artist.profession,
      picprofile: this.props.artist.artist.picprofile,
      category: this.props.artist.artist.category,
      facebook: this.props.artist.artist.facebook,
      instagram: this.props.artist.artist.instagram,
      youtube: this.props.artist.artist.youtube,
      video: this.props.artist.artist.video
    });
  }

  deleteProfile() {
    Meteor.call('artists.delete', (err) =>{
      if(err){
        alert("Ocurrió un error. Intentalo de nuevo.")
      }else{
        alert("Perfil y cuenta eliminados exitosamente")
      }
    });
    window.location = '/MiPerfil';
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
      color: 'black',
      marginLeft: '10px'
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
              <div className="mx-auto">
              <h3 >{this.state.profession}</h3>
              <p >{this.state.minidescription}</p> 
              </div>              
            </div>

            <div className="col-sm">
              <h1>Descripción</h1>
              <p>{this.state.description}</p>
            </div>
          </div>


          <div className="row">
            <div className="col-sm">
              <h2><i className="fa fa-calendar mr-2"></i>Mis Eventos</h2>
              <EventsList artist={this.props.artist.artist}/>
              <button type="button" className="btn btn-info mt-3" onClick={this.handleShowEvent.bind(this)}>Agregar evento</button>
            <Modal show={this.state.showEvent} onHide={this.handleCloseEvent.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Evento</Modal.Title>
                </Modal.Header>
                <Modal.Body> <EventForm artist={this.props.artist}/> </Modal.Body>
              </Modal>
            </div>
            <div className="col-sm">
            {this.state.video? <iframe width="560" height="315" src={this.state.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>Aquí va tu video. Anímate!</h1>}  
            </div>
          </div>


          <div className="row">
            <div className="col-sm">
              <button type="button" className="btn-lg btn-info mr-3 mt-5" onClick={this.handleShow.bind(this)}>Editar Perfil</button>
              <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body><ProfileForm artistEdit={this.props.artist} /> </Modal.Body>
              </Modal>

              
              <button type="button" className="btn-lg btn-warning mt-5" onClick={this.deleteProfile.bind(this)}>Eliminar Perfil</button>
            </div>


            <div className="col-sm">

              <div className="row">

                <div className="col-sm">

                  <div className="float-right" >

                   {this.state.facebook ? <a href={this.state.facebook} target="_blank" style={icons}><i className="fa fa-facebook-square fa-5x mt-2"></i></a> : <i className="fa fa-facebook-square fa-5x mt-2" style={icons}></i> } 
                   {this.state.instagram ? <a href={this.state.instagram} target="_blank" style={icons}><i className="fa fa-instagram fa-5x mt-2"></i></a> : <i className="fa fa-instagram fa-5x mt-2" style={icons}></i> } 
                   {this.state.youtube ? <a href={this.state.youtube} target="_blank" style={icons}><i className="fa fa-youtube fa-5x mt-2"></i></a>: <i className="fa fa-youtube fa-5x mt-2" style={icons}></i> }

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
