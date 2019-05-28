import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ProfileForm from './ProfileForm'

class ViewProfileForm extends Component {

    constructor(){
        super();
        this.state={
            artist:null,
            artistEdit:null
        }
    }
    componentDidMount(){
        console.log(Meteor.userId())
        if(Meteor.userId()){

          //let ret=Meteor.call('artists.findUsername', Meteor.userId())
            this.setState({            
                artistEdit: null
            });
        }else{
            alert("You have to be logged in")
        }
        
    }

  render() {

    return (
      <div className="ViewProfileForm container">        
        {this.state.artistEdit ? (<ArtistProfile2 artist={this.state.artistEdit}/>): (<ProfileForm  artistEdit={this.state.artistEdit}/>)}        
      </div>
    );
  }
}

export default ViewProfileForm;