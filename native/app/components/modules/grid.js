import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getModule, activateModule } from 'actions/modules'

import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import GridView from 'components/grid-view'
import ModulesGridIcon from './grid/icon'


class ModulesGrid extends Component {
  render() {
    const count = 20
    const modules = this.props.modules.map((module) => {
      return {
        ...module,
        icon: true
      }
    })
    const blank = { name: '', icon: false }
    const blanks = _.fill(Array(count - modules.length), blank)
    const items = _.concat(modules, blanks)

    return (
      <View style={styles.container}>
        <GridView
          items={items}
          itemsPerRow={4}
          renderItem={this.renderModule.bind(this)}>
        </GridView>
      </View>
    )
  }


  renderModule(module, index) {
    return (
      <ModulesGridIcon key={index}
        module={module}
        onPress={this.props.onModulePress}></ModulesGridIcon>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
  }
})


export default connect(
  (state) => ({ }),
  (dispatch) => ( bindActionCreators({ getModule }, dispatch) )
)(ModulesGrid)
