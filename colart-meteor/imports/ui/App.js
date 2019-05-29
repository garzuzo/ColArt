import React, { Component } from 'react';
import ArtistCard from './components/artistcard/ArtistCard';
import ArtistCarousel from './components/artistcarousel/ArtistCarousel';
import UserForm from './components/userform/UserForm';
import NavBar from './components/navbar/NavBar';
import ServiceCard from './components/services/ServiceCard';
import {BrowserRouter as Router, Route } from  'react-router-dom';

import { withTracker } from 'meteor/react-meteor-data';
 
import { Artists } from '../api/artists.js';
import { CategoryCollection } from '../api/categories.js';
import Categories from './components/categories/Categories';
import Home from './components/Home'
import Info from './components/Info'
import Payment from './components/Payment/Payment'
import ArtistProfile from './components/artistprofile/ArtistProfile'
import Crowdfunding from './components/Crowdfunding/Crowdfunding'
import Category from './components/category/Category';
import CategoryDetail from './components/categorydetail/CategoryDetail';
import ViewProfileForm from './components/artistprofile/ViewProfileForm';
import ArtistProfile2 from './components/artistprofile/ArtistProfile2';

class App extends Component {
  render() {
    
   // console.log("This is the process.env:", process.env.PUBLIC_URL)
    return (
      <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
     
      <NavBar/>

      <Route  exact path="/Categorias" component={Categories}/>
      <Route  exact path="/home" component={Home} />
      <Route exact  path="/" component={Home} />
      <Route  exact path="/Info" component={Info} />
      <Route  exact path="/Payment" component={Payment} />
      <Route exact  path="/ArtistProfile" component={ArtistProfile} />
      <Route  exact path="/Crowdfunding" component={Crowdfunding} />
      <Route  exact path="/Category/:catAct" component={Category} />
      <Route exact  path="/CategoryDetail/:catDetAct" component={CategoryDetail} />
      <Route exact  path="/MiPerfil" component={ViewProfileForm} />
      
      </Router>
      </div>
    );
  }
}

//lo pondré aqui el withTracker, pero hay que buscar el componente de los artistas para hacerlo!
export default withTracker(() => {
  Meteor.subscribe('users');
  Meteor.subscribe('artists');
  Meteor.subscribe('categories');
  return {
    artists: Artists.find({}).fetch(),
    categories: CategoryCollection.find({}).fetch(),
    currentUser: Meteor.user(),
    users: Meteor.users.find({}).fetch()
  };
})(App);
