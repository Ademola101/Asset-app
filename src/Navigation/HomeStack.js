import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

const HomeStack  = createNativeStackNavigator();

export default function HomeStackNavigator ()  {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
    >

      <HomeStack.Screen name = 'Home' component={HomeScreen}/>
    </HomeStack.Navigator>
  );
}