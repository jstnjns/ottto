import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import ModulesGridIcon from './grid/icon'
import { getModule, activateModule } from './modules-actions'


class ModulesGrid extends Component {
  render() {
    const count = 20
    const modules = this.props.modules.map((module) => {
      return { ...module, icon: true }
    })
    const blanks = _.fill(Array(count - modules.length), undefined)
    const items = [...modules, ...blanks]

    return (
      <View style={styles.content}>
        {items.map(this.renderModule)}
      </View>
    )
  }


  renderModule = (module, index) => {
    return (
      <ModulesGridIcon key={index}
        module={module}
        onPress={this.props.onModulePress}></ModulesGridIcon>
    )
  }
}


const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
})


export default connect(
  (state) => ({ }),
  (dispatch) => ( bindActionCreators({ getModule }, dispatch) )
)(ModulesGrid)
