import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';

export default function LoginForm({ onSubmit }) {
  return (
    <View>
      <Text> Log in </Text>
      <FormikTextInput name= 'username' placeholder = 'username'/>
      <FormikTextInput name= 'password' placeholder = 'password' secureTextEntry = {true}/>
      <Pressable onPress = {onSubmit}>
        <Text
          style = {styles.loginButton}

        >Login</Text>
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
}
);