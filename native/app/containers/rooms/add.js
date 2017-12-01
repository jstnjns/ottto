import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Modal from 'react-native-modalbox'

class RoomsAdd extends Component {
  componentDidMount() {
    this.refs.modal.open()
  }

  render() {
    return (
      <Modal ref="modal"
        position={'center'}
        onClosed={this.onClose}
        style={styles.modal}>
        <Text>Add Room</Text>
      </Modal>
    )
  }

  onClose() {
    Actions.pop()
  }
}


const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  }
})


export default RoomsAdd
