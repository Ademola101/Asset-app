import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';
const HomeStack  = createNativeStackNavigator();

export default function HomeStackNavigator ()  {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
    >

      <HomeStack.Screen name = 'Home' component={HomeScreen}/>
      <HomeStack.Screen name = 'CoinDetails' component={CoinDetailsScreen}/>
    </HomeStack.Navigator>
  );
}