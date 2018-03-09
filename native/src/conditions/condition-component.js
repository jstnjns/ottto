import _ from 'lodash'
import React, { Component } from 'react'
import { Modal, TouchableHighlight, Button, Picker, View, Text, StyleSheet } from 'react-native'
import { Field } from 'redux-form'

import {
  mapModulesOptions,
  mapAttributesOptions,
  mapOperatorsOptions,
  mapValuesOptions,
} from './utils'



class TagPicker extends Component {
  state = {
    showOptions: false,
  }

  render() {
    const {
      input: { value, onChange, ...inputProps },
      options,
      placeholder
    } = this.props

    const match = _.find(options, { value })
    const label = match && match.label || placeholder

    return (
      <View>
        <TouchableHighlight
          style={[styles.tag, match ? styles.tagValue : styles.tagEmpty]}
          onPress={() => this.setState({ showOptions: !this.state.showOptions })}>
          <Text style={styles.tagText}>
            {label}
          </Text>
        </TouchableHighlight>

        <Modal
          transparent={true}
          visible={this.state.showOptions}
          animationType="slide">
          <View style={styles.modal}>
            <View style={styles.pickerContainer}>
              <Button
                style={styles.tag}
                title="Done"
                onPress={() => this.setState({ showOptions: false })} />

              <Picker
                onValueChange={onChange}
                selectedValue={value}>
                <Picker.Item
                  key={'blank'}
                  label=""
                  value="" />
                {options.map( (option) => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value} />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}


export default class Condition extends Component {
  render() {
    const {
      modules,
      module,
      attribute,
      operator,

      onValueUpdate,
      submit,
    } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Condition</Text>
        </View>

        <View style={styles.tagsContainer}>
          <Field
            component={TagPicker}
            name="module"
            options={mapModulesOptions(modules)}
            placeholder="Module"
            onChange={(value) => onValueUpdate('module')} />

          {module && (
            <Field
              component={TagPicker}
              name="attribute"
              options={mapAttributesOptions(module)}
              placeholder="Attribute"
              onChange={(value) => onValueUpdate('attribute')} />
          )}

          {attribute && (
            <Field
              component={TagPicker}
              name="operator"
              options={mapOperatorsOptions(attribute)}
              placeholder="Operator"
              onChange={(value) => onValueUpdate('operator')} />
          )}

          {operator && (
            <Field
              component={TagPicker}
              name="value"
              options={mapValuesOptions(attribute)}
              placeholder="Value"
              onChange={(value) => onValueUpdate('value')} />
          )}
        </View>

        <Button
          title="Save..."
          onPress={submit} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    padding: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  header: {
    color: '#9B9B9B',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
  },
  tag: {
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  tagValue: {
    backgroundColor: '#007AFF',
  },
  tagEmpty: {
    backgroundColor: '#DDDDDD',
  },
  tagText: {
    color: 'white',
    fontSize: 18,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
  },
})
