import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'
import { postRoom } from 'actions/rooms-actions'

import RoomsAdd from './rooms-add-component'


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
