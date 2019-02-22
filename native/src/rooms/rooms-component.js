import _ from 'lodash'
import React, { PureComponent } from 'react'
import { FlatList, TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'


class Rooms extends PureComponent {
  componentWillMount() {
    this.props.getRooms()
    this.props.getModules()
  }

  render() {
    const { rooms } = this.props

    return (
      <FlatList style={styles.container}
        contentContainerStyle={styles.list}
        data={_.toArray(rooms)}
        renderItem={this.renderRoom.bind(this)}
        keyExtractor={(item, index) => String(index)}/>
    )
  }

  renderRoom({ item }) {
    return (
      <TouchableHighlight
        onPress={this.roomPress.bind(this, item)}
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


  roomPress(room) {
    Actions.room({
      title: room.name,
      room,
    })
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
    backgroundColor: '#DDDDDD',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default Rooms
