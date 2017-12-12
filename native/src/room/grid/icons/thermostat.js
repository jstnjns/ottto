import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class MotionIcon extends Component {
  render() {
    const { module, style } = this.props

    return (
      <TouchableHighlight key={module.id}
        style={[style, styles.container]}
        underlayColor='#FFF'
        onPress={this.props.onPress.bind(this, module)}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            {module.values.temperature}&deg;
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    borderRadius: 26,
    // backgroundColor: '#F1F1F1',
    borderColor: '#F1F1F1',
    borderWidth: 5,
    overflow: 'hidden',
  },
  text: {
    marginRight: -7,
    fontSize: 24,
    fontWeight: '700',
    color: '#FBB289'
  },
})


export default MotionIcon
