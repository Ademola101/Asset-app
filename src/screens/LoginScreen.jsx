import { View } from 'react-native';
import React from 'react';
import LoginForm from '../Components/LoginForm';
import { Formik } from 'formik';
import * as yup from 'yup';


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
export default function LoginScreen() {
  return (
    <View>
      <Formik
        initialValues = {initialValues}
        onSubmit = {values => console.log(values)}
        validationSchema = {validationSchema}
      >

        {({ handleSubmit }) => <LoginForm onSubmit = {handleSubmit} />}

      </Formik>
    </View>
  );
}