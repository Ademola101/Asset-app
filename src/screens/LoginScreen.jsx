import { View, Text, Button } from 'react-native';
import React from 'react';
import FormikTextInput from '../Components/FormikTextInput';
import {auth} from '../../config/firebase'
export default function LoginScreen() {

  const handleSignIn = async() => {
    try {

      const user = await auth.signInWithEmailAndPassword
      
    } catch (error) {
      
    }
  }

  }
  return (
    <View>
      <Text>Log in </Text>
      <FormikTextInput name= 'username' placeholder = 'username'/>
      <FormikTextInput name= 'password' placeholder = 'password' secureTextEntry = {true}/>
      <Button title = 'Sign in'/>
    </View>
  );
}