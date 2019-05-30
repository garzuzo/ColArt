import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import EventForm from './EventForm'

class EventItem extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
         showEvent: false
        }
      }
    
    deleteEvent() {
        console.log(this.props.id)
        Meteor.call('events.delete', this.props.artist, this.props.id, (err)=>{
            if(err){
                alert("Ocurrió un error. Intentalo de nuevo.")
            }else{
                alert("Evento eliminado exitosamente")
            }
        })
        window.location = '/MiPerfil';
    }

    handleCloseEvent() {
        this.setState({ showEvent: false });
      }
    
      handleShowEvent() {
        this.setState({ showEvent: true });
      }

    render() {
        //var  event=this.props.event;

        return (
            <div>
                <h5>{this.props.title}</h5>
                <h5>Fecha: {this.props.date}</h5>
                <h6>{this.props.description}</h6>
                <h6>Lugar: {this.props.location}</h6>

                <button type="button" className="btn-sm btn-warning mr-3 mt-3" onClick={this.handleShowEvent.bind(this)}>Editar evento</button>
                <Modal show={this.state.showEvent} onHide={this.handleCloseEvent.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Evento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <EventForm artist={this.props.artist} id={this.props.id} title={this.props.title} date={this.props.date} description={this.props.description} location={this.props.location}/> </Modal.Body>
                </Modal>
                <button type="button" className="btn-sm btn-danger mt-3" onClick={this.deleteEvent.bind(this)}>Eliminar evento</button>
                <hr></hr>
            </div>
        );
    }

}

export default EventItem;
