module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    ip: {
      type: 'string',
      isIP: true
    },

    chip: {
      type: 'string'
    },

    type: {
      model: 'ModuleType'
    },

    group: {
      model: 'ModuleGroup'
    },

    values: {
      type: 'json'
    }
  }

};
