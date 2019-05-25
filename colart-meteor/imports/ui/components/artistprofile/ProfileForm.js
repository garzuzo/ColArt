import React, { Component } from 'react';

class ProfileForm extends Component {
    constructor() {
        super();

        this.state = {
            //artist that is in the form
            _id: "", name: "", lastname: "", minidescription: "", description: "", profession: "",
            video: "", picprofile: "", category: "", facebook: "", instagram: "", youtube: ""
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
        let user= Meteor.user()
        if (Meteor.call('artists.findUsername', user.username)) {
            this.updateArtist(artist)
        }
        //si no esta se va a crear
        else {
            this.createArtist(artist)
        }
    }

    createArtist(artist){
        let finalArtist = {
            _id: artist._id,
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
            events:[{date:new Date(), location:"", description:"", title:""}],
            totalScore:0,
            averageScore:0
        }
        Meteor.call('artists.insert', finalArtist)
    }

    updateArtist(artist){
        Meteor.call('artists.update', artist)
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentWillReceiveProps(props) {

        if(props.artistEdit){
            this.setState({
                // _id: props.artistEdit._id,
                // name: props.artistEdit.name,
                // lastname: props.artistEdit.lastname,
                // minidescription: props.artistEdit.minidescription,
                // description: props.artistEdit.description,
                // profession: props.artistEdit.profession,
                // video: props.artistEdit.video,
                // picprofile: props.artistEdit.picprofile,
                // category: props.artistEdit.category,
                // facebook: props.artistEdit.facebook,
                // instagram: props.artistEdit.instagram,
                // youtube: props.artistEdit.youtube
             });
        }        
    }

    render() {
        return (
            <div className="ProfileForm container mt-5">
                <form onSubmit={this.handleAction.bind(this)}>
                    <input type="hidden" name="_id" value={this.state._id} onChange={this.handleOnChange.bind(this)} />
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname">Apellido</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="minidescription">Mini Descripción</label>
                        <input type="text" className="form-control" id="minidescription" name="minidescription" value={this.state.minidescription} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profession">Profesión</label>
                        <input type="text" className="form-control" id="profession" name="profession" value={this.state.profession} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="video">Video</label>
                        <input type="text" className="form-control" id="video" name="video" value={this.state.video} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="picprofile">Imagen de perfil</label>
                        <input type="text" className="form-control" id="picprofile" name="picprofile" value={this.state.picprofile} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Categoria</label>
                        <select className="form-control custom-select" id="category" name="category" value={this.state.picprofile} onChange={this.handleOnChange.bind(this)}>
                            <option>Musica</option>
                            <option>Pintura</option>
                            <option>Teatro</option>
                            <option>Danza</option>
                        </select>
                    </div>

                    <h4>Redes sociales </h4>
                    <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input type="text" className="form-control" id="facebook" name="facebook" value={this.state.facebook} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="instagram">Instagram</label>
                        <input type="text" className="form-control" id="instagram" name="instagram" value={this.state.instagram} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="youtube">Youtube</label>
                        <input type="text" className="form-control" id="youtube" name="youtube" value={this.state.youtube} onChange={this.handleOnChange.bind(this)} />
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Enviar</button>
                </form>
            </div>
        );
    }
}

export default ProfileForm;
