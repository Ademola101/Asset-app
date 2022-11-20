
import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import AuthStackNavigator from './AuthStack';
import { auth } from '../../config/firebase';
import { UserContext } from '../Context/userContext';
import HomeStackNavigator from './HomeStack';
import {
} from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
    text: 'hsl(0deg 0% 100%)',

  }
};
const RootNavigator = () => {

  const [loading, setLoading] = useState(true);
  const { setUser, User } = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async(authenticateduser) => {
      try {
        await (authenticateduser ? setUser(authenticateduser) : setUser(null));
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      return unsubscribe;

    }
    );
  },[]);

  if (loading) {
    return (
      <View style = {
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator
          size='large'
          color='#0000ff'


        />
      </View>
    );
  }
  return (

    <NavigationContainer
      theme={MyTheme}

    >

      {User ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>

  );
};

export default RootNavigator;