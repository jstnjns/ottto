/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

 var interfaces = require('os').networkInterfaces(),
     ethernet = interfaces.eth0 || interfaces.en0,
     match = ethernet || []
       .find(function(interface) { return interface.family == 'IPv4'; }),
     ip = match && match.address || 'localhost';

 module.exports = {

 //   paths: {
 //     tmp: '../.tmp/',
 //     public: '../.tmp/public/'
 //   },
 
   explicitHost: ip,
   port: 1337,

  // Any configuration settings may be overridden below, whether it's built-in Sails
  // options or custom configuration specifically for your app (e.g. Stripe, Mailgun, etc.)

};
