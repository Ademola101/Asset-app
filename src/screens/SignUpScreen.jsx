import { View, Pressable,Text } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from '../Components/SignUpForm';


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
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),


});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

export default function SignUpScreen({ navigation }) {
  return (
    <View>
      <Formik
        initialValues = {initialValues}
        onSubmit = {values => console.log(values)}
        validationSchema = {validationSchema}


      >

        {({ handleSubmit }) => <SignUpForm onSubmit = {handleSubmit} />}

      </Formik>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Sign in</Text>
      </Pressable>
    </View>
  );
}