import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Action extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Action</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
})
