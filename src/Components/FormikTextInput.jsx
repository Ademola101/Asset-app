import { View, Text } from 'react-native';
import React from 'react';
import TextInput from './TextInput';
import { useField } from 'formik';

export default function FormikTextInput({ name, ...props }) {
  const [field, meta, helper] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <View>
      <TextInput
        onChangeText = {(value) => helper.setValue(value) }

        onBlur = {() => helper.setTouched(true)}
        value = {field.value}
        error = {showError}
        {...props}

      />
      {showError && (<Text> {meta.error}</Text>) }


    </View>
  );
}