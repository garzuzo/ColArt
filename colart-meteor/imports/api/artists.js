import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Artists = new Mongo.Collection('artists');
export const Users = Meteor.users;
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('users', function () {
    return Meteor.users.find();
  });
  Meteor.publish('artists', function () {
    return Artists.find();
  });
}

Meteor.methods({
  'artists.insert'(artist) {
    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Artists.insert({
      artist,
      createdAt: new Date(),
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'artists.findUsername'() {

    let user = Meteor.users.findOne({ _id: this.userId })

    if (user && user.username){
console.log(Artists.findOne({ username: user.username }))
      return Artists.findOne({ username: user.username })
    }
    else
      return null;
  },
  'artists.update'(artist, username) {
    Artists.update({ username: username }, artist);
  },
  'artists.delete'() {
    let artist = Meteor.users.findOne({ _id: this.userId })
    Artists.remove({ username: artist.username });
    Meteor.users.remove(this.userId);
  },
  'findArtistsByCategory'(categoryName){
    return Artists.find({category:categoryName});
  }
});
