import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'


class Thermometer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.indicator}>
          <Text style={styles.text}>
            {this.props.module.values.temperature}&deg;
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
    backgroundColor: '#666',
    borderRadius: 100,
  },
  text: {
    color: "#FFF",
    fontSize: 72,
  }
})

export default Thermometer
