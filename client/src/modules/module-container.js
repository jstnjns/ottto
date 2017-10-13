import _ from 'lodash'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Form, Grid } from 'semantic-ui-react'

import { getModule, updateModule } from './modules-actions'
import Attribute from './attribute'

class Module extends Component {
  componentWillMount() {
    this.props.getModule(this.props.params.id)
  }

  render() {
    let { module, updateModule } = this.props

    if (module) {
      return (
        <div className="module">
          <Link to={`/rooms/${module.group.id}`}>
            &lt; {module.group.name}
          </Link>

          <h1>{module.name}</h1>

          <Form>
            <Grid>
              {module.type.attributes.map((attribute, key) => {
                return (
                  <Grid.Column key={key} width={4}>
                    <Attribute
                      module={module}
                      attribute={attribute}
                      value={module.values[attribute.name]}
                      onChange={this.onAttributeChange(attribute).bind(this)}/>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Form>
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  onAttributeChange(attribute) {
    return (value) => {
      let module = _.clone(this.props.module)
      module.values[attribute.name] = value

      this.props.updateModule(module)
    }
  }
}


export default connect(
  (state, props) => ({ module: state.modules.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getModule, updateModule }, dispatch)
)(Module)
