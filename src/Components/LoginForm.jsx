import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';

export default function LoginForm({ onSubmit, isSubmitting }) {

  return (
    <View style = {styles.formContainer}>

      <FormikTextInput name= 'username' placeholder = 'Enter your username'/>
      <FormikTextInput name= 'password' placeholder = 'Enter your password' secureTextEntry = {true}/>
      <Pressable onPress = {onSubmit}>

        <Text
          style = {styles.loginButton}

        > {isSubmitting && <ActivityIndicator size = 'small' color = 'white'/>}Login</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  loginButton: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
  },

  formContainer: {
    padding: 10,
  },



}
);