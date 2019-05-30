
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProfileForm from './ProfileForm';
import EventsList from '../events/EventsList';
import EventForm from '../events/EventForm'
import { Meteor } from 'meteor/meteor';
class ArtistProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //artist that is in the form
      _id: "", name: "", lastname: "", minidescription: "", description: "", profession: "",
      video: "", picprofile: "", category: "", facebook: "", instagram: "", youtube: "",
      show: false, showEvent: false, artistAct: {}, usernameAct: this.props.match.params.artAct
    }
    this.findArtist = this.findArtist.bind(this);
  }

  findArtist() {

    Meteor.call('artists.findByUsername', this.state.usernameAct, (err, res) => {

      if (res) {

        this.setState({
          artistAct: res.artist,
          name: res.artist.name,
          lastname: res.artist.lastname,
          minidescription: res.artist.minidescription,
          description: res.artist.description,
          profession: res.artist.profession,
          picprofile: res.artist.picprofile,
          category: res.artist.category,
          facebook: res.artist.facebook,
          instagram: res.artist.instagram,
          youtube: res.artist.youtube,
          video: res.artist.video
        });
      }
    })

  }
  componentDidMount() {
    this.findArtist();

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
      <div className="ArtistProfile container">

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
              <h2><i className="fa fa-calendar mr-2"></i>Eventos</h2>
              
              <EventsList artist={this.state.artistAct} />

            </div>
            <div className="col-sm">
              {this.state.video ? <iframe width="560" height="315" src={this.state.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <h1>Aquí va tu video. Anímate!</h1>}
            </div>
          </div>


          <div className="row">



            <div className="col-sm">

              <div className="row">

                <div className="col-sm">

                  <div className="float-right" >

                    {this.state.facebook ? <a href={this.state.facebook} target="_blank" style={icons}><i className="fa fa-facebook-square fa-5x mt-2"></i></a> : <i className="fa fa-facebook-square fa-5x mt-2" style={icons}></i>}
                    {this.state.instagram ? <a href={this.state.instagram} target="_blank" style={icons}><i className="fa fa-instagram fa-5x mt-2"></i></a> : <i className="fa fa-instagram fa-5x mt-2" style={icons}></i>}
                    {this.state.youtube ? <a href={this.state.youtube} target="_blank" style={icons}><i className="fa fa-youtube fa-5x mt-2"></i></a> : <i className="fa fa-youtube fa-5x mt-2" style={icons}></i>}

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
