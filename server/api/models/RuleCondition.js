/**
* RuleConditions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    rule: {
      model: 'Rule',
      required: true
    },

    module: {
      model: 'Module',
      required: true
    },

    attribute: {
      type: 'string',
      required: true
    },

    operator: {
      type: 'string',
      isIn: ['==', '!=', '>', '<', '> x <'],
      required: true
    },

    value: {
      type: 'string',
      required: true
    }

  }

};
