import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux';

import Rule from 'rules/rule-component'


export default connect(
  // mapStateToProps
  (state, { rule }) => ({
    rule: {
      ...rule,
      conditions: rule.conditions.map((condition) => ({
        ...condition,
        module: _.find(state.modules.entities, { id: condition.module })
      })),
      actions: rule.actions.map((action) => ({
        ...action,
        module: _.find(state.modules.entities, { id: action.module })
      })),
    }
  }),
  // mapDispatchToProps
  (dispatch) => ({ })
)(Rule)
