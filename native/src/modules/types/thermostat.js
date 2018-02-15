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

        <View style={styles.temperatureContainer}
          pointerEvents="none">
          <Text style={styles.temperature}>
            {this.props.module.values.temperature}&deg;
          </Text>
        </View>
      </View>
    )
  }

  onChange(angle, radius) {
    console.log(arguments)
  }
}

const dialRadius = 200
const indicatorDiameter = 32

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  responder: {
    backgroundColor: '#F1F1F1',
    elevation: 3,
    padding: indicatorDiameter,
    borderRadius: dialRadius / 2 + indicatorDiameter,
  },
  wheel: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    elevation: 5,
    padding: 0,
    width: dialRadius,
    height: dialRadius,
    borderRadius: dialRadius / 2,
  },
  indicator: {
    position: 'absolute',
    left: (dialRadius / 2) - (indicatorDiameter / 2),
    top: -indicatorDiameter,
    backgroundColor: '#FFFFFF',
    borderRadius: indicatorDiameter / 2,
    width: indicatorDiameter,
    height: indicatorDiameter,
  },
  temperatureContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 360,
    height: dialRadius + (indicatorDiameter * 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    color: '#FBB289',
    backgroundColor: 'transparent',
    fontWeight: '700',
    fontSize: 96,
  }
})

export default Thermometer
