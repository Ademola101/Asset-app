import { View, Pressable, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import LoginForm from '../Components/LoginForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth } from '../../config/firebase';
import { UserContext } from '../Context/userContext';
import Notification from '../Components/Notification';
import showToast from '../utils/showToast';
import LoadingModal from '../Components/LoadingModal';


const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string().email('Email must be a valid email').required('Email is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
});
export default function LoginScreen({ navigation }) {
  const [errormessage, setErrormessage] = useState(null);
  const { setUser } =  useContext(UserContext);
  const handleSignIn = async ({ email, password }) => {
    try {
      const trimEmail = email.trim();
      const trimPassword = password.trim();
      await auth.signInWithEmailAndPassword(trimEmail, trimPassword);

      setUser(auth.currentUser.email);
      showToast('Login Successful');

    } catch (e) {
      console.log(e);
      setErrormessage('Invalid Email or password');
      // showToast('Invalid Email or password');
    }

  };


  return (
    <View style = {styles.formScreenContainer}>

      <Formik
        initialValues = {initialValues}
        onSubmit = {values => handleSignIn({ email: values.email, password: values.password })}
        validationSchema = {validationSchema}
      >

        {({ handleSubmit, isSubmitting }) => {

          return ( <>
            <Notification errormessage={errormessage} />
            <LoginForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
            <Text style = {styles.accountText}>Don&apos;t have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style = {styles.signUpText}>Sign up</Text>

            </Pressable>
            <LoadingModal isVisible={isSubmitting}
            />


          </>
          );
        }

        }




      </Formik>

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