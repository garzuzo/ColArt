import React, { Component } from 'react';
import EventItem from './EventItem';

class EventsList extends Component {


  constructor(props) {
    super(props);
    this.state = {
       eventsAct: [],
       artist: this.props.artist,
       }

  
  }

  
 /*  componentDidMount() {
//console.log(this.props.artist.events)
    this.createEventItem();

  } */
  componentDidMount(){
this.setState({artist: this.props.artist})

var eventsList = [];
if (this.state.artist && this.state.artist.events) {
  console.log(this.state.artist.events)
  for (var i = 0; i < this.state.artist.events.length; i++) {

    let id = this.state.artist.events[i].id;
    let title = this.state.artist.events[i].title;
    let date = this.state.artist.events[i].date;
    let description = this.state.artist.events[i].description;
    let location = this.state.artist.events[i].location;

    eventsList.push(
      <EventItem key={id} look={this.props.look} artist={this.state.artist} id={id} title={title} date={date} description={description} location={location} />
    )

  }
 
  this.setState({ eventsAct: eventsList })
}
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
