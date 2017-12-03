import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoom } from 'actions/rooms-actions'

import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { Router, Scene, Tabs, Actions, Lightbox } from 'react-native-router-flux';

import ScenesContainer from './scenes/scenes-container';
import RulesContainer from './rules/rules-container';

import RoomsContainer from './rooms/rooms-container';
import RoomsAddContainer from './rooms/rooms-add-container';
import RoomContainer from './room/room-container';

import ModulesContainer from './modules/modules-container';
import ModuleContainer from './module/module-container';

import SettingsContainer from './settings/settings-container';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Tabs key="root"
            tabBarStyle={styles.tabBar}
            activeTintColor={'#157EFB'}>
            <Scene key="scenes"
              component={ScenesContainer}
              title="Scenes"
              icon={this.renderIcon}
              iconName="ios-image"
            />

            <Scene key="rules"
              component={RulesContainer}
              title="Rules"
              icon={this.renderIcon}
              iconName="ios-options"
            />

            <Scene key="roomsScene"
              title="Rooms"
              icon={this.renderIcon}
              iconName="ios-home"
              initial={true}>
              <Scene key="rooms"
                initial={true}
                component={RoomsContainer}
                navTransparent
                title="Rooms"
                rightTitle="Add"
                onRight={() => { Actions.addRoom({ test: 'yep' }) }}
              />

              <Scene key="room"
                component={RoomContainer}
                navTransparent
                title="Room"
                rightTitle="Edit"
                onRight={() => { alert('edit') }}
              />
            </Scene>

            <Scene key="modules"
              component={ModulesContainer}
              title="Modules"
              icon={this.renderIcon}
              iconName="ios-cube"
            />

            <Scene key="settings"
              component={SettingsContainer}
              title="Settings"
              icon={this.renderIcon}
              iconName="ios-settings"
            />
          </Tabs>


          <Scene key="showModule"
            component={ModuleContainer} />

          <Scene key="addRoom"
            component={RoomsAddContainer} />
        </Lightbox>
      </Router>
    )
  }

  renderIcon(scene) {
    const iconName = scene.focused
      ? scene.iconName
      : scene.iconName + '-outline'
    const colorName = scene.focused
      ? scene.activeTintColor
      : scene.tintColor

    return (
      <Icon name={iconName} size={28}
        color={colorName} />
    )
  }
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 0,
  }
})


export default connect(
  (state) => ( {} ),
  (dispatch) => ( bindActionCreators({ addRoom }, dispatch) )
)(Routes)
