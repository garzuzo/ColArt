import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProfileForm  from './ProfileForm'

class ArtistProfile2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //artist that is in the form
      _id: "", name: "Holaaaaaaa", lastname: "", minidescription: "", description: "", profession: "",
      video: "https://www.youtube.com/embed/8zQTfGbyY5I?autoplay=1", picprofile: "", category: "", facebook: "", instagram: "", youtube: "",
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {

    console.log(this.props.artist)
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
      textColor: 'black',
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
            </div>

            <div className="col-sm">
              <h1>Descripción</h1>
              <p>{this.state.description}</p>
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
              <button type="button" className="btn-lg btn-info" onClick={this.handleShow.bind(this)}>Editar Perfil</button>
              <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body><ProfileForm artistEdit={this.props.artist} /> </Modal.Body>
              </Modal>

              
              <button type="button" className="btn-lg btn-warning" onClick={this.deleteProfile.bind(this)}>Eliminar Perfil</button>
            </div>


            <div className="col-sm">

              <div className="row">

                <div className="col-sm">

                  <div className="float-right" >

                    <a href={this.state.facebook} target="_blank" style={icons}><i className="fa fa-facebook-square fa-5x"></i></a>
                    <a href={this.state.instagram} target="_blank" style={icons}><i className="fa fa-instagram fa-5x"></i></a>
                    <a href={this.state.youtube} target="_blank" style={icons}><i className="fa fa-youtube fa-5x margin-left"></i></a>

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
