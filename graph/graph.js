import * as path from 'path'
import { Types } from 'mongoose'
import camelCase from 'lodash/camelCase'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'


const TYPES = ['Int', 'Float', 'String', 'Boolean', 'ID']

const getType = (attribute) => attribute.type || attribute
const rawType = (attribute) => getType(attribute).replace(/[\[\]!]/g, '')
const isStandard = (attribute) => TYPES.includes(rawType(attribute))
const isCollection = (attribute) => getType(attribute).search(/\[/) > -1

// SCHEMA
const generateSchema = (models) => {
  const typeDefs = mergeTypes(map(models, generateModelTypes))
  const resolvers = generateModelResolvers(models)

  return {
    typeDefs,
    resolvers,
  }
}


// TYPEDEFS
const generateModelTypes = (attributes, name) => {
  const text = `
type Query {
  ${camelCase(name)}s: [${name}]
  ${camelCase(name)}(_id: ID!): ${name}
}

type Mutation {
  create${name}(input: ${name}Input): ${name}
  update${name}(_id: ID, input: ${name}Input): ${name}
  delete${name}(_id: ID!): ${name}
}

${generateType(name, attributes)}
${generateInput(name, attributes)}
  `

  return text
}

const generateType = (model, attributes) => {
  const withID = {
    _id: 'ID',
    ...attributes,
  }
  const mapped = map(withID, (attribute, key) =>
    `${key}: ${getType(attribute)}`
  )
  const joined = mapped.join('\n  ')

  return `
type ${model} {
  ${joined}
}
  `
}

const generateInput = (model, attributes) => {
  const replaced = mapValues(attributes, (attribute, key) =>
    isStandard(attribute)
      ? attribute
      : `ID`
  )
  const mapped = map(replaced, (attribute, key) =>
    `${key}: ${rawType(attribute)}`
  )
  const joined = mapped.join('\n  ')

  return `
input ${model}Input {
  ${joined}
}
  `
}


// RESOLVERS
const generateModelResolvers = (schema) =>
  map(schema, generateResolvers)

const generateResolvers = (attributes, model) => ({
  Query: {
    [`${camelCase(model)}s`]: generateResolver(
      model,
      (Model, _, args) => Model.find(args)
    ),
    [camelCase(model)]: generateResolver(
      model,
      (Model, _, args) => Model.findOne(args)
    ),
  },

  Mutation: {
    [`create${model}`]: generateResolver(
      model,
      (Model, _, { input }) => Model.create(input),
    ),
    [`update${model}`]: generateResolver(
      model,
      (Model, _, { _id, input }) =>
        Model.findOneAndUpdate(
          { _id: _id || Types.ObjectId() },
          input,
          { new: true, upsert: true }
        ),
    ),
    [`delete${model}`]: generateResolver(
      model,
      (Model, _, { _id }) => Model.deleteOne({ _id }),
    ),
  },

  [model]: generateAttributeResolvers(model, attributes)
})

const generateResolver = (model, run) =>
  (parent, args, context) =>
    run(context[model], parent, args, context)

const generateAttributeResolvers = (model, attributes) =>
  mapValues(attributes, (attribute, name) => {
    if (attribute.resolver) {
      return attribute.resolver
    }

    return isStandard(attribute)
      ? (parent) => parent[name]
      : generateAttributeResolver(model, name, attribute)
  })

const generateAttributeResolver = (model, name, attribute) => {
  if (attribute.resolver) {
    return attribute.resolver
  }

  return generateResolver(
    rawType(attribute),
    (Model, parent) =>
      isCollection(attribute)
        ? console.log(name, model) || Model.find({ [camelCase(model)]: parent._id })
        : Model.findOne({ _id: parent[name] })
  )
}


export default generateSchema
