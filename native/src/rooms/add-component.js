import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Field } from 'redux-form'

import { TextInputField, Button } from 'common/forms'





class RoomsAdd extends PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.container}>
        <Field
          component={TextInputField}
          name="name"
          label="Room Name"
        />

        <Button onPress={handleSubmit}>
          Save
        </Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    paddingTop: 120,
  },
})


export default RoomsAdd
