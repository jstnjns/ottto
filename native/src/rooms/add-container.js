import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import RoomsAdd from './add-component'
import { postRoom } from './rooms-actions'


const RoomsAddForm = reduxForm({
  form: 'roomsAdd',
  onSubmit: (values, dispatch) => (
    dispatch(postRoom(values))
      .then(() => Actions.pop())
  ),
})(RoomsAdd)


export default connect(
  (state) => ({ }),
  (dispatch) => ({ })
)(RoomsAddForm)
