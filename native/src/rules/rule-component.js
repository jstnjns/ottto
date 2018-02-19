import React, { Component } from 'react'
import { Button, TouchableHighlight, View, Text, StyleSheet } from 'react-native'

const OPERATOR_MAP = {
  '==': 'is',
  '!=': 'is not',
  '<': 'less than',
  '<=': 'less than or equal to',
  '>': 'greater than',
  '>=': 'greater than or equal to',
}


class Rule extends Component {
  render() {
    const { rule } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>
              If...
            </Text>
          </View>

          <View style={styles.list}>
            {rule.conditions.map(this.renderCondition)}
          </View>

          <Button style={styles.addButton}
            title="Add Condition"
            onPress={() => {}} />
        </View>

        <View style={styles.listContainer}>
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>
              Then...
            </Text>
          </View>

          <View style={styles.list}>
            {rule.actions.map(this.renderAction)}
          </View>

          <Button style={styles.addButton}
            title="Add Action"
            onPress={() => {}} />
        </View>
      </View>
    )
  }

  renderCondition = (condition, i) => {
    const { onConditionPress } = this.props;

    return (
      <TouchableHighlight key={i}
        underlayColor='#eee'
        onPress={onConditionPress}>
        <View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              {condition.module.name}
              {condition.attribute}
              {OPERATOR_MAP[condition.operator]}
              {condition.value}
            </Text>
          </View>
          <View style={styles.listSeparator}></View>
        </View>
      </TouchableHighlight>
    )
  }

  renderAction = (action, i) => {
    const { onActionPress } = this.props;

    return (
      <TouchableHighlight key={i}
        underlayColor='#eee'
        onPress={onActionPress}>
        <View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              {action.module.name}
              {action.attribute}
              {action.value}
            </Text>
          </View>
          <View style={styles.listSeparator}></View>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  listContainer: {
    marginBottom: 20,
  },
  listHeaderContainer: {
    padding: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  listHeader: {
    color: '#9B9B9B',
  },
  listHeader: {
    color: '#9B9B9B',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  listItemText: {
    flex: 1,
    fontSize: 17,
  },
  listSeparator: {
    height: 1,
    marginLeft: 15,
    backgroundColor: '#DDDDDD',
  },
  addButton: {
    margin: 15,
    width: 15,
    height: 15,
    backgroundColor: '#333333',
    borderRadius: 8,
  }
})


export default Rule
