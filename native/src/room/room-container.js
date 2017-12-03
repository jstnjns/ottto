import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux';

import { StyleSheet, View } from 'react-native'
import ModulesGrid from './modules-grid'


class Room extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ModulesGrid modules={this.props.modules}
          onModulePress={this.onModulePress.bind(this) }/>
      </View>
    )
  }

  onModulePress(module) {
    Actions.showModule({ module })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F9F9F9',
  }
})


export default connect(
  (state, props) => {
    return {
      modules: _.filter(state.modules.entities, (module) => {
        return module.group ? module.group.id == props.room.id : false
      })
    }
  },
  (dispatch) => ({})
)(Room)
