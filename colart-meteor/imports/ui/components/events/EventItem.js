import React, { Component } from 'react';

class EventItem extends Component {

  render() {
    //var  event=this.props.event;

    return (
      <div>
        <h5>{this.props.title}</h5>
        <h5>Fecha: {this.props.date}</h5>
        <h6>{this.props.description}</h6>
        <h6>Lugar: {this.props.location}</h6>
        
        <button type="button" className="btn-sm btn-warning mr-5 mt-3">Editar evento</button>
        <button type="button" className="btn-sm btn-danger mt-3">Eliminar evento</button>
        <hr></hr>
      </div>       
    );
  }

}

export default EventItem;
