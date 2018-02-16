import React, { PureComponent } from 'react';
import { SectionList, TouchableHighlight, Text, View, StyleSheet } from 'react-native'

class Rules extends PureComponent {
  componentDidMount() {
    this.props.getRules()
  }

  render() {
    return (
      <SectionList style={styles.container}
        contentContainerStyle={styles.list}
        sections={[
          { data: this.props.rules, title: 'Active' }
        ]}
        renderSectionHeader={this.renderHeader.bind(this)}
        renderItem={this.renderRule.bind(this)}
        keyExtractor={(item, index) => index}
      />
    )
  }

  renderHeader({ section }) {
    return (
      <View style={styles.listHeaderContainer}>
        <Text style={styles.listHeader}>{section.title}</Text>
      </View>
    )
  }

  renderRule({ item }) {
    const { onRulePress } = this.props;

    return (
      <TouchableHighlight
        onPress={onRulePress.bind(null, item)}
        underlayColor='#eee'>
        <View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.name}</Text>
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
    backgroundColor: '#F9F9F9',
  },
  list: {
    flex: 1,
    justifyContent: 'center',
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
});

export default Rules;
