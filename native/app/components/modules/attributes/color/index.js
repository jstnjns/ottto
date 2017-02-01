import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  PanResponder,
  Animated,
} from 'react-native'
import tinycolor from 'tinycolor2'


const WHEEL_RADIUS = 130
const CURSOR_RADIUS = 20


class Color extends Component {
  constructor(props) {
    super(props)

    let left = WHEEL_RADIUS
    let top = WHEEL_RADIUS

    this.state = {
      previousLeft: left,
      previousTop: top,
      cursorLeft: left - CURSOR_RADIUS,
      cursorTop: top - CURSOR_RADIUS,

      hue: 0,
      saturation: 0,
      color: '#FFF',
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.onMove.bind(this),
      onPanResponderRelease: this.onMoveEnd.bind(this),
    })
  }

  onMove(event, gesture) {
    let left = this.state.previousLeft + gesture.dx
    let top = this.state.previousTop + gesture.dy
    let center = WHEEL_RADIUS
    let x = left - center
    let y = top - center

    let rad = Math.atan2(y, x)
    let distance = Math.sqrt(x * x + y * y)

    let hue = (-rad * (180 / Math.PI) + 360) % 360
    let saturation = 100
    let lightness = (1 - distance / WHEEL_RADIUS) * 50 + 50
    let color = tinycolor({ h: hue, s: saturation, l: lightness }).toHexString()

    this.setState({
      cursorLeft: left - CURSOR_RADIUS,
      cursorTop: top - CURSOR_RADIUS,

      color
    })

    this.props.onColorChange && this.props.onColorChange(color)
  }

  onMoveEnd(event, gesture) {
    this.setState({
      previousLeft: this.state.previousLeft + gesture.dx,
      previousTop: this.state.previousTop + gesture.dy,
    })
  }

  render() {
    return (
      <View style={[styles.container, this.getWheelStyles()]}>
        <Image style={styles.colorWheel}
          source={require('./colorwheel.png')}
          resizeMode='contain' />
        <View style={styles.cursorContainer}>
          <Animated.View style={[styles.cursor, this.getCursorStyles()]}
            {...this.panResponder.panHandlers} />
        </View>
      </View>
    )
  }

  getCursorStyles() {
    return {
      left: this.state.cursorLeft,
      top: this.state.cursorTop,
      backgroundColor: this.state.color,
    }
  }

  getWheelStyles() {
    return {
      borderColor: this.state.color,
    }
  }
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: WHEEL_RADIUS * 2 + 40,
    height: WHEEL_RADIUS * 2 + 40,
    borderWidth: 20,
    borderColor: '#FFF',
    borderRadius: WHEEL_RADIUS * 2 + 40
  },
  colorWheel: {
    width: WHEEL_RADIUS * 2,
    height: WHEEL_RADIUS * 2,
    borderRadius: WHEEL_RADIUS,
  },
  cursorContainer: {
    position: 'absolute',
  },
  cursor: {
    width: CURSOR_RADIUS * 2,
    height: CURSOR_RADIUS * 2,
    backgroundColor: 'hsl(0, 100%, 50%)',
    borderWidth: 4,
    borderColor: '#FFF',
    borderRadius: CURSOR_RADIUS,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowColor: '#000000',
  },
})

export default Color
