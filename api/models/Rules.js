/**
* Rules.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('underscore'),
    uuid = require('node-uuid');

module.exports = {

  attributes: {

    // User-given name to the rule for easy targeting
    name: {
      type: 'string',
      required: true
    },

    // Array of IDs associated to the required conditions
    conditions: {
      type: 'array',
      required: true
    },

    // The action emitted by the input object to cause the rule to trigger
    event: {
      type: 'string',
      required: true
    },

    // Array of IDs associated to the actions to be triggered
    actions: {
      type: 'array',
      required: true
    }

  }

};
