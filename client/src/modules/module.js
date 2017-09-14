import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getModule } from './modules-actions'

class Module extends Component {
  componentWillMount() {
    this.props.getModule(this.props.params.id)
  }

  render() {
    let { module } = this.props

    if (module) {
      return (
        <div className="module">
          <h1>{module.name}</h1>
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}


export default connect(
  (state, props) => ({ module: state.modules.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getModule }, dispatch)
)(Module)
