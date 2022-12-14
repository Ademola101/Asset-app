import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';
const SignUpForm = ({ handleSubmit }) => {
  return (
    <View>
      <Text style = {styles.createNewText}>Create new account</Text>
      <FormikTextInput name='username' placeholder='Enter your username' />
      <FormikTextInput name='password' placeholder='Enter your password' secureTextEntry={true} />
      <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry={true} />

      <Pressable onPress={handleSubmit}>
        <Text style = {styles.signUpButton}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

  createNewText: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50,
  },

  signUpButton: {
    backgroundColor: '#0366d6',
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    textAlign: 'center',
  },
});

export default SignUpForm;
