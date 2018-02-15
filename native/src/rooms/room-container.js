import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux';

import Room from './room-component'


export default connect(
  // mapStateToProps
  (state, props) => {
    return {
      modules: _.filter(state.modules.entities, (module) => {
        return module.group ? module.group.id == props.room.id : false
      })
    }
  },
  // mapDispatchToProps
  (dispatch) => ({
    onModulePress: (module) => (
      Actions.showModule({ module })
    )
  })
)(Room)
