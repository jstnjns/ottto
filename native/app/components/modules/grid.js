import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getModule, activateModule } from 'actions/modules'

import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { BlurView } from 'react-native-blur'
import GridView from 'components/grid-view'
import ModulesGridIcon from './grid/icon'


class ModulesGrid extends Component {
  render() {
    const count = 24
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
      <View style={{flex: 1}}>
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
      <View style={styles.gridItem} key={index}>
        <ModulesGridIcon
          module={module}
          onPress={this.props.onModulePress}></ModulesGridIcon>
        <Text style={styles.gridItemText}>{module.name}</Text>
      </View>
    )
  }
}


const iconDimension = 60;
const styles = StyleSheet.create({
  blur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  gridItem: {
    margin: 5,
    alignItems: 'center',
  },
  gridItemText: {
    marginTop: 5,
    width: iconDimension,
    height: 12,
    overflow: 'hidden',
    fontSize: 11,
    color: '#999999',
    textAlign: 'center'
  },
})


export default connect(
  (state) => ({ }),
  (dispatch) => ( bindActionCreators({ getModule }, dispatch) )
)(ModulesGrid)
