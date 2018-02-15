import React, { PureComponent } from 'react';
import { FlatList, TouchableHighlight, Text, View, StyleSheet } from 'react-native'

class Rules extends PureComponent {
  componentDidMount() {
    this.props.getRules()
  }

  render() {
    return (
      <FlatList style={styles.container}
        contentContainerStyle={styles.list}
        data={this.props.rules}
        renderItem={this.renderRule.bind(this)}
        keyExtractor={(item, index) => index}/>
    )
  }

  renderRule({ item }) {
    return (
      <TouchableHighlight
        onPress={this.rulePress.bind(this, item)}
        underlayColor='#eee'>
        <View>
          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
          <View style={styles.listSeparator}></View>
        </View>
      </TouchableHighlight>
    )
  }

  rulePress(rule) {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  list: {
    flex: 1,
    justifyContent: 'center',
  },
  listTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  listIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
    lineHeight: 24,
    backgroundColor: 'gray',
    borderRadius: 3,
    color: 'white',
    textAlign: 'center',
  },
  listText: {
    flex: 1,
    fontSize: 17,
  },
  listItemDelete: {
    color: '#c00',
  },
  listSeparator: {
    height: 1,
    marginLeft: 15,
    backgroundColor: '#EEEEEE',
  },
});

export default Rules;
