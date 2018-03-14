import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import ModulesGrid from 'modules/grid-component'


class Room extends Component {
  render() {
    const {
      room,
      onModulePress,
    } = this.props

    console.log('room', room)

    return (
      <View style={styles.container}>
        <ModulesGrid modules={room.modules}
          onModulePress={onModulePress}/>
      </View>
    )
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
