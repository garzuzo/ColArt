import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'
 
export const Artists = new Mongo.Collection('artists');

Meteor.methods({
    'artists.insert'(artist) {
     // Make sure the user is logged in before inserting a task
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
   
      Artists.insert({
        artist,
        createdAt: new Date(),
        username: Meteor.users.findOne(Meteor.userId()).username,
      });
    },
    'artists.findUsername'(id){
      console.log(id)
      let user= Meteor.users.findOne({_id: id.trim()})
      console.log(user)
      Artists.findOne({username: user.username})
    },
    'artists.update'(artist, username){
      Artists.update({username: username}, artist);
    }, 
    'artists.delete'(){
      let artist= Meteor.users.findOne({_id: Meteor.userId()})
      Artists.deleteOne( {username: artist.username});
      Meteor.users.remove(Meteor.userId());
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