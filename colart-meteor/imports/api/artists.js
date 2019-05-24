import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'
 
export const Artists = new Mongo.Collection('artists');

Meteor.methods({
    'artists.insert'(artist) {
     // Make sure the user is logged in before inserting a task
      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }
   
      Artists.insert({
        artist,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
      });
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