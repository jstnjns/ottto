import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import RoomsAdd from 'rooms/add-component'
import { postRoom } from 'rooms/rooms-actions'


export default connect(
  (state) => ({ }),
  (dispatch) => bindActionCreators({ postRoom }, dispatch)
)(reduxForm({
  form: 'roomsAdd',
  onSubmit: (values, dispatch) => (
    dispatch(postRoom(values))
      .then(() => Actions.pop())
  ),
})(RoomsAdd))
