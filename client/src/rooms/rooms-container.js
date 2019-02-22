import _ from 'lodash'
import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { getRooms } from './rooms-actions'
import { getModules } from '../modules/modules-actions'
import RoomsList from './rooms-list'


class Rooms extends PureComponent {
  componentWillMount() {
    this.props.getRooms()
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Rooms
            </Typography>
          </Toolbar>
        </AppBar>

        <RoomsList rooms={this.props.rooms} />
      </div>
    )
  }
}


export default connect(
  (state) => ({ rooms: _.toArray(state.rooms.entities) }),
  (dispatch) => bindActionCreators({ getRooms, getModules }, dispatch)
)(Rooms)
