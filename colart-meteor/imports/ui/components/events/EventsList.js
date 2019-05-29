import React, { Component } from 'react';
import EventItem from './EventItem';

class EventsList extends Component {

  render() {
    console.log(this.props.events);

    //let  events = this.props.events.map( (eventTmp)=>
      //  (<EventItem key={eventTmp.title} event={eventTmp} />)
    //);
    let events = [];

        for (var i = 0; i < this.props.events.length; i++) {

            let title = this.props.events[i].title;
            let date = this.props.events[i].date;
            let description = this.props.events[i].description;
            let location = this.props.events[i].location;

            events.push(
               <EventItem key={title} title={title} date={date} description={description} location={location}/>
            )

        }

    return (
      <div className="EventsList">
            {events}
            <button type="button" className="btn btn-info mt-3">Agregar evento</button>
      </div>
    );
  }
}

export default EventsList;
