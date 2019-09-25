import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Module from './module-component'


export const query = gql`
  query Module($_id: ID!) {
    module(_id: $_id) {
      _id
      name
      attributes {
        _id
        key
        name
        primative
        default
        min
        max
        measurement
        step
        value {
          _id
          value
        }
      }
      type {
        _id
        name
      }
      group {
        _id
        name
      }
    }
  }
`


export default ({ match: { params: { _id }}}) =>
  <Query query={query} variables={{ _id }}>
    {({ loading, error, data }) =>
      <div>
        {loading &&
          <p>Loading...</p>
        }
        {error &&
          <p>Error :(</p>
        }

        {data && data.module &&
          <Module module={data.module} />
        }
      </div>
    }
  </Query>
