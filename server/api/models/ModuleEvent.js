/**
* ModuleEvents.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    module: {
      model: 'Module'
    },

    attribute: {
      type: 'string',
      required: true
    },

    value: {
      type: 'string',
      required: true
    },

    previous: {
      type: 'string'
    }

  }

};
