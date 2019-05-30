import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ProfileForm from './ProfileForm'
import ArtistProfile2 from './ArtistProfile2'
class ViewProfileForm extends Component {

  constructor(props) {
    super(props);
    this.state = {

      artistAct: null
    }
    this.findUser = this.findUser.bind(this);

  }

  findUser() {

    // console.log(Meteor.userId())


    if (Meteor.userId()) {


      Meteor.call('artists.findUsername', (err, res) => {
        if (res)
          this.setState({
            artistAct: res
          });

      });





    } else {
      alert("Tienes que iniciar sesión para mostrarte tu perfil");
    }

  }
  componentDidMount() {

    this.findUser();
  }

  render() {

    return (
      <div className="ViewProfileForm container">
        {this.state.artistAct ? (<ArtistProfile2 artist={this.state.artistAct} />) : (<ProfileForm artistEdit={this.state.artistAct} />)}
      </div>
    );
  }
}

export default ViewProfileForm;