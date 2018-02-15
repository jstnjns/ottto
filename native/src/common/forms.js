import React, { PureComponent } from 'react'
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native'


const InputError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <Text>Error: {error}</Text>
    )
  }

  return null
}


export const TextInputField = ({ input, label, meta }) => (
  <View style={styles.formGroup}>
    <Text style={styles.label}>
      {label}
    </Text>
    <TextInput {...input}
      style={styles.input}
      onChangeText={input.onChange}
      placeholder={label}
    />
    <InputError {...meta} />
  </View>
)


export const Button = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}>
    <Text style={styles.button}>
      {children}
    </Text>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 10,
    color: '#999999'
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  button: {
    padding: 10,
    color: '#FF0000',
  },
})
