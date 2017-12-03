import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoom } from 'actions/rooms-actions'

import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Router, Scene, Tabs, Actions, Lightbox } from 'react-native-router-flux';

import ScenesContainer from './scenes/scenes-container';
import RulesContainer from './rules/rules-container';

import RoomsContainer from './rooms/rooms-container';
import RoomsDetailContainer from './rooms/room-container';
import RoomsAddContainer from './rooms/rooms-add-container';

import ModulesContainer from './modules/modules-container';
import ModulesOverlayContainer from './modules/module-container';

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
              iconName="picture-o"
            />

            <Scene key="rules"
              component={RulesContainer}
              title="Rules"
              icon={this.renderIcon}
              iconName="sliders"
            />

            <Scene key="roomsScene"
              title="Rooms"
              icon={this.renderIcon}
              iconName="home"
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
                component={RoomsDetailContainer}
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
              iconName="th"
            />

            <Scene key="settings"
              component={SettingsContainer}
              title="Settings"
              icon={this.renderIcon}
              iconName="cog"
            />
          </Tabs>


          <Scene key="showModule"
            component={ModulesOverlayContainer} />

          <Scene key="addRoom"
            component={RoomsAddContainer} />
        </Lightbox>
      </Router>
    )
  }

  renderIcon(scene) {
    return (
      <Icon name={scene.iconName} size={20}
        color={scene.focused ? scene.activeTintColor : scene.tintColor} />
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
