import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ProfileForm from './ProfileForm'

class ViewProfileForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      artistEdit: null
    }
  }
  componentDidMount() {
    console.log(Meteor.userId())

    let ret={};
    if (Meteor.userId()) {


      Meteor.call('artists.findUsername', Meteor.userId(), function (err, res) {

        if (err) {
          alert(err)
        } else {
          if (res) {
            console.log("existe:" + res)
            ret=res;
           
          } else {
            console.log(":(")
          }

        }

      })
    } else {
      alert("You have to be logged in")
    }
    this.setState({
      artistEdit: ret
    });

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