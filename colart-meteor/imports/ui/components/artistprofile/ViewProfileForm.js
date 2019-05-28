import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ProfileForm from './ProfileForm'
import ArtistProfile2 from './ArtistProfile2'
class ViewProfileForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      artistEdit: null
    }
    this.findUser = this.findUser.bind(this);

  }

  findUser(){

 // console.log(Meteor.userId())

 let ret = null;
 if (Meteor.userId()) {


   ret = Meteor.call('artists.findUsername', Meteor.userId());
   this.setState({
    artistEdit: ret
  });
 
 } else {
   alert("You have to be logged in")
 }
 
  }
  componentDidMount() {
   
this.findUser();
  }

  render() {

    return (
      <div className="ViewProfileForm container">
        {this.state.artistEdit ? (<ArtistProfile2 artist={this.state.artistEdit} />) : (<ProfileForm artistEdit={this.state.artistEdit} />)}
      </div>
    );
  }
}

export default ViewProfileForm;