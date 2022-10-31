import { View, Pressable, Text } from 'react-native';
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

  const { setUser, User } =  useContext(UserContext);
  const handleSignIn = async ({ username, password }) => {
    try {
      const trimUsername = username.trim();
      const trimPassword = password.trim();
      await auth.signInWithEmailAndPassword(trimUsername, trimPassword);

      setUser(auth.currentUser.email);

    } catch (e) {
      console.log(e);
    }
    console.log(User);
  };


  return (
    <View>
      <Formik
        initialValues = {initialValues}
        onSubmit = {values => handleSignIn({ username: values.username, password: values.password })}
        validationSchema = {validationSchema}
      >

        {({ handleSubmit }) => <LoginForm onSubmit = {handleSubmit} />}

      </Formik>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text>Don&apos;t have an account? Sign up</Text>
      </Pressable>
    </View>
  );
}