import { View, Pressable,Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from '../Components/SignUpForm';
import { auth } from '../../config/firebase';
import Notification from '../Components/Notification';
import showToast from '../utils/showToast';


const validationSchema = yup.object().shape({
  email: yup
    .string().email('Valid email address required').required('Email is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),


});

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

export default function SignUpScreen({ navigation }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSignUp = async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      showToast('Sign up successful');
    } catch (e) {

      console.log(e);
      if (e.code === 'auth/email-already-in-use') {
        setErrorMessage('Email address is already in use');
      } else if (e.code === 'auth/invalid-email') {
        setErrorMessage('Email address is invalid');
      }
      else {
        setErrorMessage(e.message);
      }
    }
  };
  return (
    <View style = {styles.formScreenContainer}>

      <Formik
        initialValues = {initialValues}
        onSubmit = {values => handleSignUp({ email: values.email, password: values.password })}
        validationSchema = {validationSchema}
      >
        {({ handleSubmit, isSubmitting, }) => {
          return (
            <>

              <SignUpForm handleSubmit={handleSubmit} isSubmitting = {isSubmitting}>
                <Notification errormessage={errorMessage} />
              </SignUpForm>

            </>
          );
        }}


      </Formik>
      <Text style = {styles.accountText}> Already have an account? </Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style = {styles.signInText}>Sign in</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  formScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  accountText: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  signInText: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
});