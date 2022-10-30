import { View, Text, Pressable } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';
const SignUpForm = () => {
  return (
    <View>
      <Text>Create new account</Text>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry={true} />

      <Pressable onPress={() => console.log('pressed')}>
        <Text>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;