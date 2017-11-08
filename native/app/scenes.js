import React, { Component } from 'react';
import { Text, AlertIOS } from 'react-native';
import { Router, Scene, Actions, Lightbox } from 'react-native-router-flux';

import ScenesContainer from './containers/scenes';
import RulesContainer from './containers/rules';

import RoomsContainer from './containers/rooms';
import RoomsAddContainer from './containers/rooms/add';
import RoomsDetailContainer from './containers/rooms/detail';

import ModulesContainer from './containers/modules';
import SettingsContainer from './containers/settings';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRoom } from './actions/rooms'


class Scenes extends Component {
  render() {
    return (
      <Router>
        <Lightbox key="modal">
          <Scene key="root" tabs={true}>
            <Scene key="scenes"
              component={ScenesContainer}
              title="Scenes"
              icon={this.renderTab}
            />

            <Scene key="rules"
              component={RulesContainer}
              title="Rules"
              icon={this.renderTab}
            />

            <Scene key="roomsScene"
              title="Rooms"
              icon={this.renderTab}
              initial>

              <Scene key="rooms"
                component={RoomsContainer}
                title="Rooms"
                rightTitle="Add"
                onRight={() => { Actions.roomsAdd() }}
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
              icon={this.renderTab}
            />

            <Scene key="settings"
              component={SettingsContainer}
              title="Settings"
              icon={this.renderTab}
            />
          </Scene>

          <Scene key="roomsAdd"
            component={RoomsAddContainer}
            title="Add Room"
            leftTitle="Cancel"
            onLeft={Actions.rooms}
          />
        </Lightbox>
      </Router>
    )
  }

  renderTab({selected, title}) {
    return (
      <Text>{title}</Text>
    )
  }
}


export default connect(
  (state) => ( {} ),
  (dispatch) => ( bindActionCreators({ addRoom }, dispatch) )
)(Scenes)
