import { Meteor } from 'meteor/meteor';
import '../imports/api/artists.js';
import '../imports/api/email.js';
Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtp://mishale22:SANDRAmishale0613@smtp.sendgrid.net:587?tls.rejectUnauthorized=false';
});
