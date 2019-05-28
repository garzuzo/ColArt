import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Artists = new Mongo.Collection('artists');
export const Users = Meteor.users;
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('users', function() {
    return Meteor.users.find();
  });
  Meteor.publish('artists', function() {
    return Artists.find();
  });
}

Meteor.methods({
    'artists.insert'(artist) {
     // Make sure the user is logged in before inserting a task
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
   
      Artists.insert({
        artist,
        createdAt: new Date(),
        username: Meteor.users.findOne(this.userId).username,
      });
    },
     'artists.findUsername'(id){
     
      let user= Meteor.users.findOne({_id: id}).username
      
      console.log(user)
      const retorno=   Artists.findOne({username: user})
       console.log(retorno)
           return retorno;
    },
    'artists.update'(artist, username){
      Artists.update({username: username}, artist);
    }, 
    'artists.delete'(){
      let artist= Meteor.users.findOne({_id: this.userId})
      Artists.remove( {username: artist.username});
      Meteor.users.remove(this.userId);
    }
});

//Accounts.createUser((options) => {

  //  let artist= {
    //    miniDescription: "Type your minidescription",
    //    profession: "Type your profession",
    //    totalScore: 0, 
    //    averageScore: 0, 
    //    name: "Type your name"
    //}

  //  Meteor.call('artists.insert', artist)

//});