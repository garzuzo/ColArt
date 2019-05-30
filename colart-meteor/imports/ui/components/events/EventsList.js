import React, { Component } from 'react';
import EventItem from './EventItem';

class EventsList extends Component {


  constructor(props) {
    super(props);
    this.state = { artist: this.props.artist,
       eventsAct: [],
        events: this.props.artist.events }

    this.createEventItem = this.createEventItem.bind(this);
  }

  createEventItem() {

    var artist = this.state.artist;
    var eventsState = this.state.events;
    var eventsList = [];
    if (eventsState) {
      console.log(eventsState)
      for (var i = 0; i < eventsState.length; i++) {

        let id = eventsState[i].id;
        let title = eventsState[i].title;
        let date = eventsState[i].date;
        let description = eventsState[i].description;
        let location = eventsState[i].location;

        eventsList.push(
          <EventItem key={id} artist={this.state.artist} id={id} title={title} date={date} description={description} location={location} />
        )

      }
      this.setState({ eventsAct: eventsList })
    }

  }
  componentDidMount() {

    this.createEventItem();

  }


  render() {


    //let  events = this.props.events.map( (eventTmp)=>
    //  (<EventItem key={eventTmp.title} event={eventTmp} />)
    //);


    return (
      <div className="EventsList">
        {this.state.eventsAct}
      </div>
    );
  }
}

export default EventsList;
