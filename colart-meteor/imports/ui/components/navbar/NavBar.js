import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountsUIWrapper from '../../AccountsUIWrapper.js';
class NavBar extends Component {

  
  handleProfile(){

   
    if(Meteor.user()){
      //aca iria el meteor.call
     // <Link className="nav-link" to="/MiPerfil"/>
     window.location = '/MiPerfil';
    }else{
      console.log("You have to be logged in to show you your profile");
    }
  }


  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

            <div className="form-inline">
            <button type="button" class="btn btn-light" onClick={this.handleProfile.bind(this)}>Mi perfil</button>
          </div>

          <div className="form-inline my-2 my-lg-0">
              <AccountsUIWrapper />
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
