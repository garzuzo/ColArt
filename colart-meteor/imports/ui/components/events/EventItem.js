import React, { Component } from 'react';
import LibroItem from './LibroItem';

class EventItem extends Component {

  render() {
    var  event=this.props.event;

    return (
      <div>
        <h5>{event.title}</h5>
        <h5>Fecha: {event.date}</h5>
        <h6>{event.description}</h6>
        <h6>Lugar: {event.location}</h6>
        
        <button type="button" className="btn-sm btn-warning mr-5 mt-3">Editar evento</button>
        <button type="button" className="btn-sm btn-danger mt-3">Eliminar evento</button>
        <hr></hr>
      </div>       
    );
  }

}

export default EventItem;
