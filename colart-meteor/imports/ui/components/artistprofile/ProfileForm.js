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
            events:[]
        }
        Meteor.call('artists.insert', finalArtist, (err)=>{
            if(err){
                alert("Ocurrio un error. Intentalo nuevamente.");
            }else{
                alert("Perfil creado exitosamente");
            }
        })
        //vericar
        if (Meteor.userId()) {
            window.location = '/MiPerfil';
          } else {
            alert("Tienes que iniciar sesión para mostrarte tu perfil");
          }
    }

    updateArtist(artist, username){
        console.log("ENTRO")
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
            events: this.props.artistEdit.artist.events
        }
        Meteor.call('artists.update', finalArtist,username, (err)=>{
            if(err){
                alert("Ocurrio un error. Intentalo de nuevo.");
            }
            else{
                alert("Perfil actualizado exitosamente");
            }
        })
        window.location = '/MiPerfil';
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
        var categories= [];
        Meteor.call('categories.findAll', (err, res) =>{

            if(res){              
            for (var i = 0; i < res.length; i++) {
            categories.push(
             <option>{res[i].name}</option>);
            }
          }
        }
        );

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
                        <select className="form-control custom-select" id="category" name="category" value={this.state.category} onChange={this.handleOnChange.bind(this)}>
                            {categories}
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
