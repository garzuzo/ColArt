import React, { Component } from 'react';
import EventItem from './EventItem';

class EventsList extends Component {

  render() {
    console.log(this.props.artist.events);

    //let  events = this.props.events.map( (eventTmp)=>
      //  (<EventItem key={eventTmp.title} event={eventTmp} />)
    //);
    let events = [];

        for (var i = 0; i < this.props.artist.events.length; i++) {

            let id = this.props.artist.events[i].id;
            let title = this.props.artist.events[i].title;
            let date = this.props.artist.events[i].date;
            let description = this.props.artist.events[i].description;
            let location = this.props.artist.events[i].location;

            events.push(
               <EventItem key={id} artist={this.props.artist} id={id} title={title} date={date} description={description} location={location}/>
            )

        }

    return (
      <div className="EventsList">
            {events}
      </div>
    );
  }
}

export default EventsList;
