import _ from 'lodash'
import { denormalize } from 'normalizr'

import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Rule from 'rules/rule-component'
import { ruleSchema } from '../schemas'


export default connect(
  // mapStateToProps
  (state, { rule }) => ({
    rule: denormalize(rule, ruleSchema, state.entities)
  }),
  // mapDispatchToProps
  (dispatch) => ({
    onConditionPress: (condition) => {
      Actions.condition({ condition })
    },
    onActionPress: (action) => {
      Actions.action({ action })
    },
  })
)(Rule)
