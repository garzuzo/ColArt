import React, { Component } from 'react';
import 'react-bootstrap-date-picker';

class EventForm extends Component {
    constructor() {
        super();

        this.state = {
            //artist that is in the form
            title: "", date: newDate().toISOString(), stringDate: "", description: "", location:""
        }
    }

    handleAction(e) {
        e.preventDefault();

       
        let artist = {
            name: this.state.name,
            lastname: this.state.lastname,
            minidescription: this.state.minidescription,
            description: this.state.description,
            profession: this.state.profession,
            video: this.state.video,
            picprofile: this.state.picprofile,
            category: this.state.category,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            youtube: this.state.youtube
        }

        //si esta en la bd se va a editar
        //let user= Meteor.user()
        
        //let user= Meteor.call('artists.findUsername');
        if (this.props.artistEdit) {
            console.log("existe")
            this.updateArtist(artist, this.props.artistEdit.username)
        }
        //si no esta se va a crear
        else {
            console.log("no existe")
            this.createArtist(artist)
            
        }
    }

    createArtist(artist){
        let finalArtist = {
            name: artist.name,
            lastname: artist.lastname,
            minidescription: artist.minidescription,
            description: artist.description,
            profession: artist.profession,
            video: artist.video,
            picprofile: artist.picprofile,
            category: artist.category,
            facebook: artist.facebook,
            instagram: artist.instagram,
            youtube: artist.youtube,
            events:[],
            totalScore:0,
            averageScore:0
        }
        Meteor.call('artists.insert', finalArtist)
        //vericar
        if (Meteor.userId()) {
            window.location = '/MiPerfil';
          } else {
            alert("You have to be logged in to show you your profile");
          }
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {

        console.log(this.props.artistEdit)
        if(this.props.artistEdit){
            this.setState({
                name: this.props.artistEdit.artist.name,
                lastname: this.props.artistEdit.artist.lastname,
                minidescription: this.props.artistEdit.artist.minidescription,
                description: this.props.artistEdit.artist.description,
                profession: this.props.artistEdit.artist.profession,
                picprofile: this.props.artistEdit.artist.picprofile,
                category: this.props.artistEdit.artist.category,
                facebook: this.props.artistEdit.artist.facebook,
                instagram: this.props.artistEdit.artist.instagram,
                youtube: this.props.artistEdit.artist.youtube,
                video: this.props.artistEdit.artist.video
              });
        }
      }

    render() {
        return (
            <div className="EventForm container">
                <form onSubmit={this.handleAction.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Fecha</label>
                        <DatePicker id="datepicker" className="form-control" name="date" value={this.state.date} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Lugar</label>
                        <input type="text" className="form-control" id="location" name="location" value={this.state.location} onChange={this.handleOnChange.bind(this)} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-2">Enviar</button>
                </form>
            </div>
        );
    }
}

export default ProfileForm;
