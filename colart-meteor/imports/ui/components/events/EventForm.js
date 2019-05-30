import React, { Component } from 'react';
import DatePicker from 'react-date-picker'

class EventForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //artist that is in the form
            id:"", title: "", date: new Date(), stringDate: "", description: "", location:""
        }
    }

    handleAction(e) {
        e.preventDefault();
       
        let event = {
            title: this.state.title,
            stringDate : (this.state.date.getMonth()+1) +"/"+ this.state.date.getDate()+"/"+ this.state.date.getFullYear(),
            description: this.state.description,
            location: this.state.location
        }

        console.log(event.stringDate)
        //si esta en la bd se va a editar
        //let user= Meteor.user()
        
        //let user= Meteor.call('artists.findUsername');
        if (this.state.id) {
            console.log("existe")
            this.updateEvent(event)
        }
        //si no esta se va a crear
        else {
            console.log("no existe")
            this.createEvent(event)
            
        }
    }

    createEvent(event){
        let num = Math.floor(Math.random() * (15000 - 1)) + 1;
        Meteor.call('events.insert', this.props.artist, num, event.title, event.stringDate, event.description, event.location, (err)=>{
            if(err){
                alert("Ocurrió un error. Intentalo de nuevo.")
            }else{
                alert("Evento creado exitosamente")
            }
        });
        window.location = '/MiPerfil';
    }

    updateEvent(event){
        Meteor.call('events.update', this.props.artist, this.props.id, event.title, event.stringDate, event.description, event.location, (err)=>{
            if(err){
                alert("Ocurrió un error. Intentalo de nuevo.")
            }else{
                alert("Evento actualizado exitosamente")
            }
        });       
        window.location = '/MiPerfil';
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDate(date) {
        this.setState({
            date : date
        });
    }

    componentDidMount() {

        console.log(this.props.artistEdit)
        if(this.props.id){
            this.setState({
                id: this.props.id,
                title: this.props.title,
                description: this.props.description,
                date: new Date(this.props.date),
                location: this.props.location
         });
        }
      }

    render() {
        return (
            <div className="EventForm container">
                <form onSubmit={this.handleAction.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleOnChange.bind(this)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Fecha</label>
                        <DatePicker id="datepicker" className="form-control" value={this.state.date} onChange={this.handleDate.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Lugar</label>
                        <input type="text" className="form-control" id="location" name="location" value={this.state.location} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Enviar</button>
                </form>
            </div>
        );
    }
}

export default EventForm;
