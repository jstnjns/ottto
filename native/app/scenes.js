import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoom } from './actions/rooms'

import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Router, Scene, Tabs, Actions, Lightbox } from 'react-native-router-flux';

import ScenesContainer from './containers/scenes';
import RulesContainer from './containers/rules';

import RoomsContainer from './containers/rooms/index';
import RoomsAddContainer from './containers/rooms/add';
import RoomsDetailContainer from './containers/rooms/detail';

import ModulesContainer from './containers/modules/index';
import ModulesOverlayContainer from './containers/modules/overlay';

import SettingsContainer from './containers/settings';



class Scenes extends Component {
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
                title="Rooms"
                rightTitle="Add"
                onRight={() => { Actions.addRoom({ test: 'yep' }) }}
              />

              <Scene key="room"
                component={RoomsDetailContainer}
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
  }
})


export default connect(
  (state) => ( {} ),
  (dispatch) => ( bindActionCreators({ addRoom }, dispatch) )
)(Scenes)
