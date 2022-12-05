import { View, Text, Pressable, StyleSheet,  } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';

export default function LoginForm({ onSubmit, isSubmitting }) {

  return (
    <View style = {styles.formContainer}>

      <FormikTextInput name= 'email' placeholder = 'Enter your email'/>
      <FormikTextInput name= 'password' placeholder = 'Enter your password' secureTextEntry = {true}/>
      <Pressable onPress = {onSubmit} disable = {isSubmitting && true}>

        <Text
          style = {styles.loginButton}

        >

          {/* {isSubmitting && <ActivityIndicator size = 'small' color = 'white'/>} */}

        Login</Text>
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