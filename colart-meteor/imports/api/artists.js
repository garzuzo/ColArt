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
      let user= Meteor.users.findOne({_id: id})
      Artists.findOne({username: user.username})
    },
    'artists.update'(artist){
      Artists.update({username: artist.username}, artist);
    }, 
    'artists.delete'(id){
      let artist= Meteor.users.findOne({_id: Meteor.userId()})
      Artists.deleteOne( {username: artist.username});
      Meteor.users.remove(id);
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