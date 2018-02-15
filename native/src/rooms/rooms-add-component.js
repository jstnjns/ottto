import React, { PureComponent } from 'react'
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Field } from 'redux-form'


const InputError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <Text>Error: {error}</Text>
    )
  }

  return null
}

const TextInputField = ({ input, label, meta }) => (
    <View>
      <Text>{label}</Text>
      <TextInput {...input}
        style={styles.input}
        onChangeText={input.onChange}
        placeholder={label}
      />
      <InputError {...meta} />
    </View>
  )


const Button = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}>
    <Text style={styles.button}>
      {children}
    </Text>
  </TouchableOpacity>
)


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
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  button: {
    padding: 10,
    color: 'blue',
  },
})


export default RoomsAdd
