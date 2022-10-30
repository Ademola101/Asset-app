
import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import AuthStackNavigator from './AuthStack';
import { auth } from '../../config/firebase';
import { UserContext } from '../Context/userContext';
import HomeStackNavigator from './HomeStack';
import AuthenticatedUserProvider from './AuthenticatedUserProvider';


const RootNavigator = () => {

  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

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

    },[ ]
    );
  });

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <AuthenticatedUserProvider>
      <NavigationContainer>
        {user ? <HomeStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AuthenticatedUserProvider>
  );
};

export default RootNavigator;