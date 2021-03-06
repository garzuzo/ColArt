import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor';

export const CategoryCollection = new Mongo.Collection('categories');
if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('categories', function () {
      return CategoryCollection.find();
    });
  
  }

Meteor.methods({

    'categories.insert'(category) {
        if (!CategoryCollection.findOne({ "name": category.name }))
          return  CategoryCollection.insert(category);
            else return null;
    },

    'categories.findByCategoryName'(categoryName) {
        return CategoryCollection.find({ name: categoryName }).fetch();

    },
    'categories.update'(category, categoryName) {
      console.log(categoryName)
        CategoryCollection.update({ name: categoryName }, category);
    },
    'categories.delete'(categoryName) {
        CategoryCollection.remove({ name: categoryName });

    },
    'categories.findAll'() {
      
       return CategoryCollection.find({}).fetch();

    },
    'categories.findByName'(categoryName){
        return CategoryCollection.findOne({name:categoryName});
    }


});