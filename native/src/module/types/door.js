import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Motion extends Component {
  render() {
    const style = this.props.module.values.contact
      ? styles.closed
      : styles.open

    return (
      <View style={styles.container}>
        <View style={[ styles.indicator, style ]}>
          <Text style={styles.text}>
            {this.props.module.values.contact ? 'Closed' : 'Open'}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 14,
  },
  open: {
    backgroundColor: '#EE5B5E',
  },
  closed: {
    backgroundColor: '#ccc',
  },
  text: {
    color: "#FFF"
  }
})

export default Motion
