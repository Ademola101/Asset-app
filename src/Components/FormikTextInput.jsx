import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import TextInput from './TextInput';
import { useField } from 'formik';

export default function FormikTextInput({ name, ...props }) {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <View>
      <TextInput
        onChangeText = {(value) => helpers.setValue(value) }
        style = {styles.input}

        onBlur = {() => helpers.setTouched(true)}
        value = {field.value}
        error = {showError}
        {...props}

      />
      {showError && (<Text> {meta.error}</Text>) }


    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
});