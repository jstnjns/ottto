import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Rooms from './rooms-component'


const query = gql`
  {
    groups {
      _id
      name
    }
  }
`

export default () =>
  <Query query={query}>
    {({ loading, error, data }) =>
      <div>
        {loading &&
          <p>Loading...</p>
        }

        {error &&
          <p>Error :(</p>
        }

        {data.groups &&
          <Rooms rooms={data.groups} />
        }
      </div>
    }
  </Query>
