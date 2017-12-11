import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dial } from 'react-native-dial'


class Thermometer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Dial
          responderStyle={styles.responder}
          wrapperStyle={styles.wheel}
          onValueChange={this.onChange.bind(this)}>
          <View style={styles.indicator} />
        </Dial>

        <Text style={styles.temperature}>
          {this.props.module.values.temperature}&deg;
        </Text>
      </View>
    )
  }

  onChange(angle, radius) {
    console.log(arguments)
  }
}

const dialDimension = 200
const dialPadding = 20
const indicatorWidth = 6

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    // height: 200,
    alignItems: 'center',
  },
  responder: {
    backgroundColor: 'red',
    elevation: 3,
    padding: dialPadding,
    borderRadius: dialDimension / 2 + dialPadding,
  },
  wheel: {
    position: 'relative',
    backgroundColor: 'yellow',
    elevation: 5,
    padding: 0,
    width: dialDimension,
    height: dialDimension,
    borderRadius: dialDimension / 2,
  },
  indicator: {
    position: 'absolute',
    left: dialDimension / 2,
    top: 0,
    backgroundColor: 'green',
    width: 4,
    height: 10,
  },
  temperature: {
    color: "#333",
    fontSize: 72,
  }
})

export default Thermometer
