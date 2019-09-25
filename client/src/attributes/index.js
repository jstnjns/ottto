import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import BooleanAttribute from './boolean'
import ColorAttribute from './color'
import NumberAttribute from './number'


export const mutation = gql`
  mutation UpdateValue($_id: ID, $input: ValueInput!){
    updateValue(_id: $_id, input: $input) {
      _id
      value
    }
  }
`


const handleChange = (mutate, { _id }) => (value) =>
  mutate({
    variables: {
      _id,
      input: {
        value
      }
    },
  })

const componentMap = {
  'boolean': BooleanAttribute,
  'color': ColorAttribute,
  'number': NumberAttribute,
}


export default ({
  module,
  attribute,
}) => {
  const Component = componentMap[attribute.primative]

  return (
    <Mutation mutation={mutation}>
      {(mutate) =>
        <Component
          attribute={attribute}
          value={attribute.value ? attribute.value.value : attribute.default}
          onChange={handleChange(mutate, attribute.value)}
        />
      }
    </Mutation>
  )
}
