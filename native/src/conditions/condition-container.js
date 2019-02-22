import _ from 'lodash'
import { denormalize } from 'normalizr'

import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector, change } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import Condition from './condition-component'
import { saveCondition } from './conditions-actions'
import { moduleSchema } from '../schemas'


const ConditionForm = reduxForm({
  form: 'condition',
  onSubmit: (values, dispatch, props) => (
    dispatch(saveCondition(values))
      .then(() => Actions.pop())
  ),
})(Condition)


const selector = formValueSelector('condition')


const mapStateToProps = (state, { condition, rule }) => {

  condition = condition || { module: {} }

  const moduleId = selector(state, 'module')
  const attributeName = selector(state, 'attribute')
  const operatorValue = selector(state, 'operator')

  const modules = _.toArray(state.entities.modules)
  let module
  let attribute
  let operator

  if (moduleId) {
    module = denormalize(state.entities.modules[moduleId], moduleSchema, state.entities)
  }
  if (attributeName) {
    attribute = _.find(module.type.attributes, { name: attributeName })
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
      id: condition.id,
      module: condition.module.id,
      attribute: condition.attribute,
      operator: condition.operator,
      value: condition.value,
      rule: rule.id,
    },
  }
}

const mapDispatchToProps = (dispatch) => ({
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConditionForm)
