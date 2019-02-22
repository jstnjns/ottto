import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { denormalize } from 'normalizr'

import Module from './overlay-component'
import { updateModule } from './modules-actions'
import { moduleSchema } from '../schemas'


export default connect(
  (state, { module }) => ({
    module: denormalize(module, moduleSchema, state.entities)
  }),
  (dispatch) => (bindActionCreators({ updateModule }, dispatch))
)(Module)
