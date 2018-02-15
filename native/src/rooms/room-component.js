import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux';

import ModulesGrid from '../modules/modules-grid-component'


class Room extends Component {
  render() {
    let { modules } = this.props

    return (
      <View style={styles.container}>
        <ModulesGrid modules={modules}
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


export default Room
