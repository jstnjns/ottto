import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector, change } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import Condition from 'conditions/condition-component'
import { updateCondition } from 'conditions/conditions-actions'

const ConditionForm = reduxForm({
  form: 'condition',
  onSubmit: (condition, dispatch) => (
    console.log('onSubmit', condition) ||
    dispatch(updateCondition(condition))
      .then(() => Actions.pop())
  ),
})(Condition)

const selector = formValueSelector('condition')

export default connect(
  // mapStateToProps
  (state, props) => {

    const moduleId = selector(state, 'module')
    const attributeName = selector(state, 'attribute')
    const operatorValue = selector(state, 'operator')

    const modules = _.toArray(state.modules.entities)
    let module
    let attribute
    let operator

    if (moduleId) {
      module = state.modules.entities[moduleId]
    }
    if (attributeName && module) {
      attribute = _.find(module.type.attributes, { name: attributeName }) || module.type.attributes[0]
    }
    if (operatorValue) {
      operator = operatorValue
    }

    return {
      modules,
      module,
      attribute,
      operator,

      initialValues: {
        module: props.condition.module.id,
        attribute: props.condition.attribute,
        operator: props.condition.operator,
        value: props.condition.value,
        rule: props.condition.rule,
      },
    }
  },
  // mapDispatchToProps
  (dispatch) => ({
    onValueUpdate: (name) => {
      switch(name) {
        case 'module':
          dispatch(change('condition', 'attribute', ''))
          dispatch(change('condition', 'operator', ''))
          dispatch(change('condition', 'value', ''))
        case 'attribute':
          dispatch(change('condition', 'operator', ''))
          dispatch(change('condition', 'value', ''))
        case 'operator':
          dispatch(change('condition', 'value', ''))
      }
    }
  })
)(ConditionForm)
