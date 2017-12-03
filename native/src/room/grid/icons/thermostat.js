import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class MotionIcon extends Component {
  render() {
    const { module, style } = this.props

    const iconName = module.values.motion ? 'waves' : 'sleep'

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
    backgroundColor: '#FFF'
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#333',
    borderColor: '#666',
    borderWidth: 4,
    overflow: 'hidden',
  },
  text: {
    marginRight: -7,
    fontSize: 24,
    fontWeight: '500',
    color: '#FFF'
  },
})


export default MotionIcon
