import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateModule } from '../../actions/modules'
import { Actions } from 'react-native-router-flux';

import { Animated, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Modal from 'react-native-modalbox'

import Light from 'components/modules/overlay/types/light'
import Motion from 'components/modules/overlay/types/motion'
import Thermometer from 'components/modules/overlay/types/thermometer'
import Camera from 'components/modules/overlay/types/camera'


class ModuleOverlay extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.refs.modal.open()
  }


  close() {
    this.refs.modal.close()
  }


  onClose() {
    Actions.pop()
  }


  render() {
    return (
      <Modal ref="modal"
        style={styles.modal}
        position={'bottom'}
        onClosed={this.onClose.bind(this)}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {this.props.module.name}
            </Text>
            <Text style={styles.modalSubtitle}>
              {this.props.module.type.name}
            </Text>
          </View>

          <View style={styles.modalBody}>
            {this.renderModule(this.props.module)}
          </View>
        </View>

        <TouchableHighlight style={styles.modalClose}
          onPress={this.close.bind(this)}
          underlayColor='#007AFF'>
          <Text>Close</Text>
        </TouchableHighlight>
      </Modal>
    )
  }


  renderModule(module) {
    let Contents;

    switch (this.props.module.type.name) {
      case 'Light':
        Contents = Light;
        break;
      case 'Motion':
        Contents = Motion;
        break;
      case 'Thermometer':
        Contents = Thermometer;
        break;
      case 'Camera':
        Contents = Camera;
        break;
      default:
        Contents = View
        break;
    }

    return (
      <Contents module={module}
        onModuleChange={this.onModuleChange.bind(this)} />
    )
  }


  onModuleChange(module) {
    const params = {
      id: module.id,
      values: module.values,
    }

    this.props.updateModule(params)
  }
}


const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    padding: 10, paddingBottom: 28,
    backgroundColor: 'transparent',
  },
  modalContainer: {

  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
  modalHeader: {
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  modalTitle: {
    fontWeight: '600',
  },
  modalBody: {
    padding: 10,
  },
  modalClose: {
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
})


export default connect(
  (state, props) => ({
    module: props.module ? state.modules.entities[props.module.id] : null
  }),
  (dispatch) => ( bindActionCreators({ updateModule }, dispatch) )
)(ModuleOverlay)
