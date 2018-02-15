import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Rules from 'rules/rules-component'
import { getRules } from 'rules/rules-actions'


export default connect(
  (state) => ({ rules: _.toArray(state.rules.entities) }),
  (dispatch) => bindActionCreators({ getRules }, dispatch)
)(Rules)
