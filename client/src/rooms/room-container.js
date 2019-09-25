import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Room from './room-component'


const query = gql`
  query Group($_id: ID!){
    group(_id:$_id) {
      name
      modules {
        _id
        name
        type {
          _id
          name
        }
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
        {data && data.group &&
          <Room room={data.group} />
        }
      </div>
    }
  </Query>
