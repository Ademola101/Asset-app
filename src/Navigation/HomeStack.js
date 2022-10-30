import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
const HomeStack  = createNativeStackNavigator();

export default function HomeStackNavigator ()  {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
    >

      <HomeStack.Screen name = 'Home' component={HomeScreen}/>
      <HomeStack.Screen name = 'Login' component={LoginScreen}/>
    </HomeStack.Navigator>
  );
}