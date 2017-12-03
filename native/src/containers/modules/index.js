import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Modules extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{'Modules'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  }
});

export default Modules;
