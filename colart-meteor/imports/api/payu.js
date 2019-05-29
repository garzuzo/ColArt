import { Meteor } from 'meteor/meteor';

Meteor.methods({
    encrypt(ApiKey,merchantId,referenceCode,amount,currency) {
    
        var toEncrypt=ApiKey+"~"+merchantId+"~"+referenceCode+"~"+amount+"~"+currency;
      var ret=  CryptoJS.MD5(toEncrypt).toString();
      console.log(ret)
      return ret;
    }
  });