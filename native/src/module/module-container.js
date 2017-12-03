import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateModule } from 'actions/modules-actions'

import Module from './module-component'


export default connect(
  (state, props) => ({
    module: props.module ? state.modules.entities[props.module.id] : null
  }),
  (dispatch) => (bindActionCreators({ updateModule }, dispatch))
)(Module)
