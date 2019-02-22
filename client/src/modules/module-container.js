import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Module from './module-component'
import { getModule, updateModule } from './modules-actions'

class ModuleContainer extends Component {
  componentWillMount() {
    this.props.getModule(this.props.params.id)
  }

  render() {
    let { module } = this.props

    return (
      <Module module={module}
        onModuleChange={this.onModuleChange.bind(this)}/>
    )
  }

  onModuleChange(module) {
    this.props.updateModule(module)
  }
}


export default connect(
  (state, props) => ({ module: state.modules.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getModule, updateModule }, dispatch)
)(ModuleContainer)
