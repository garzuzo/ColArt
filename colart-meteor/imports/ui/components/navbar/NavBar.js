import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../../AccountsUIWrapper.js';
class NavBar extends Component {


  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleProfile() {
    //aca iria el meteor.call
    // <Link className="nav-link" to="/MiPerfil"/>
    //  console.log(Meteor.user())
    if (Meteor.userId()) {
      window.location = '/MiPerfil';
    } else {
      alert("You have to be logged in to show you your profile");
    }

  }


  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5">
          <a className="navbar-brand " to="/home">ColArt</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categorias">Ver Artistas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Info">Info</Link>
              </li>


            </ul>

            <div className="form-inline mx-auto">
              <button type="button" className="btn btn-light" onClick={this.handleProfile.bind(this)}>Mi perfil</button>
          

            
              <AccountsUIWrapper />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
