import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'

export const Categories = new Mongo.Collection('categories');


Meteor.methods({

    'categories.insert'(category) {
        Categories.insert(category);
    },

    'categories.findByCategoryName'(categoryName) {
        Categories.findOne({ name: categoryName });

    },
    'categories.update'(category, categoryName) {
        Categories.update({ name: categoryName }, category);
    },
    'categories.delete'(categoryName) {
        Categories.remove({ name: categoryName });

    }


});