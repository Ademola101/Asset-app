import { View, Pressable, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import LoginForm from '../Components/LoginForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth } from '../../config/firebase';
import { UserContext } from '../Context/userContext';


const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be at least 1 character')
    .max(30, 'Username must be at most 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
});
export default function LoginScreen({ navigation }) {

  const { setUser } =  useContext(UserContext);
  const handleSignIn = async ({ username, password }) => {
    try {
      const trimUsername = username.trim();
      const trimPassword = password.trim();
      await auth.signInWithEmailAndPassword(trimUsername, trimPassword);

      setUser(auth.currentUser.email);

    } catch (e) {
      console.log(e);
    }

  };


  return (
    <View style = {styles.formScreenContainer}>
      <Formik
        initialValues = {initialValues}
        onSubmit = {values => handleSignIn({ username: values.username, password: values.password })}
        validationSchema = {validationSchema}
      >

        {({ handleSubmit }) => <LoginForm onSubmit = {handleSubmit} />}

      </Formik>
      <Text style = {styles.accountText}>Don&apos;t have an account? </Text>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style = {styles.signUpText}>Sign up</Text>

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({


  accountText: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  signUpText: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },

  formScreenContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 100,
  },

});