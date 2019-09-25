export default {
  'Module': {
    name: 'String!',
    ip: 'String',
    chip: 'String',
    type: 'Type',
    group: 'Group',
    values: {
      type: '[Value]',
      resolver: (parent, args, { Attribute, Value }) =>
        Attribute
          .find({ type: parent.type })
          .then((attributes) =>
            Promise.all(
              attributes.map((attribute) =>
                Value
                  .findOne({
                    attribute: attribute._id,
                    module: parent._id,
                  })
                  .then((value) => ({
                    _id: value && value._id,
                    value: value && value.value,
                    attribute: attribute,
                  }))
              )
            )
          )
    },
    attributes: {
      type: '[Attribute]',
      resolver: (parent, args, { Attribute, Value }) =>
        Attribute
          .find({ type: parent.type })
          .then((attributes) =>
            Promise.all(
              attributes.map((attribute) =>
                Value.findOne({
                  attribute: attribute._id,
                  module: parent._id,
                })
                .then((value) => ({
                  _id: attribute._id,
                  key: attribute.key,
                  name: attribute.name,
                  primative: attribute.primative,
                  default: attribute.default,
                  min: attribute.min,
                  max: attribute.max,
                  step: attribute.step,
                  measurement: attribute.measurement,
                  value,
                }))
              )
            )
          )
    },
  },

  'Type': {
    name: 'String!',
    modules: '[Module]',
    attributes: '[Attribute]',
  },

  'Attribute': {
    key: 'String!',
    name: 'String!',
    primative: 'String!', // enum [boolean, number, color]
    default: 'String!',
    type: 'Type!',
    measurement: 'String', // enum [%, #],
    min: 'String',
    max: 'String',
    step: 'String',
    value: 'Value',
  },

  'Value': {
    module: 'Module!',
    attribute: 'Attribute',
    value: 'String',
  },

  'Group': {
    name: 'String!',
    modules: '[Module]',
  },

  'Event': {
    module: 'Module!',
    attribute: 'String!',
    value: 'String!',
    previous: 'String',
  },

  'Rule': {
    name: 'String!',
    operator: 'String!', // default '&&'
    conditions: '[Condition]',
    actions: '[Action]',
  },

  'Condition': {
    rule: 'Rule!',
    module: 'Module!',
    attribute: 'Attribute!',
    operator: 'String!', // enum ['==', '!=', '>', '<', '> x <']
    value: 'String!',
  },

  'Action': {
    rule: 'Rule!',
    module: 'Module!',
    method: 'String!',
    arguments: '[String]',
  },
}
