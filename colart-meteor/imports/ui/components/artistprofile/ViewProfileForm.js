import React, { Component } from 'react';

import ProfileForm from './ProfileForm'
import { metaProperty } from '@babel/types';

class ViewProfileForm extends Component {

    constructor(){
        super();
        this.state={
            artist:null
        }
    }
    componentWillMount(){
        this.setState({
            artist= Meteor.call('artists.findUsername', Meteor.user().username)
        });
    }

  render() {

    return (
      <div className="ViewProfileForm container">        
        {this.state.artist ? (<ArtistProfile2 />): (<ProfileForm  libroEdit={this.state.libroEdit}/>)}        
      </div>
    );
  }
}

export default ViewProfileForm;
