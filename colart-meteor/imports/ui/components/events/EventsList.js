import React, { Component } from 'react';
import EventItem from './EventItem';

class EventsList extends Component {

  handleEditLibro(libro){
    this.props.handleEditarLibro(libro);
    //console.log(libro)
  }

  render() {
    //console.log(this.props.libros);

    let  events = this.props.events.map( (eventTmp)=>
        (<EventItem key={eventTmp.title} event={eventTmp} />)
    );

    return (
      <div className="EventsList">
            {events}
            <button type="button" className="btn btn-info mt-3">Agregar evento</button>
      </div>
    );
  }
}

export default EventsList;
