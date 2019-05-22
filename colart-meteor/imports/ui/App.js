import React, { Component } from 'react';
import ArtistCard from './components/artistcard/ArtistCard';
import ArtistCarousel from './components/artistcarousel/ArtistCarousel';
import UserForm from './components/userform/UserForm';
import NavBar from './components/navbar/NavBar';
import ServiceCard from './components/services/ServiceCard';
import {BrowserRouter as Router, Route } from  'react-router-dom';

import { withTracker } from 'meteor/react-meteor-data';
 
import { Artists } from '../api/artists.js';

import Categories from './components/categories/Categories';
import Home from './components/Home'
import Info from './components/Info'
import Payment from './components/Payment/Payment'
import ArtistProfile from './components/artistprofile/ArtistProfile'
import Crowdfunding from './components/Crowdfunding/Crowdfunding'
import Category from './components/category/Category';
import CategoryDetail from './components/categorydetail/CategoryDetail';

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
      <Route  exact path="/Category" component={Category} />
      <Route exact  path="/CategoryDetail" component={CategoryDetail} />
      
      </Router>
      </div>
    );
  }
}

//lo pondré aqui el withTracker, pero hay que buscar el componente de los artistas para hacerlo!
export default withTracker(() => {
  return {
    artists: Artists.find({}).fetch(),
  };
})(App);
