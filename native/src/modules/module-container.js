import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Module from 'modules/module-component'
import { updateModule } from 'modules/modules-actions'


export default connect(
  (state, props) => ({
    module: props.module ? state.modules.entities[props.module.id] : null
  }),
  (dispatch) => (bindActionCreators({ updateModule }, dispatch))
)(Module)
