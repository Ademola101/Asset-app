import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';
const HomeStack  = createNativeStackNavigator();

export default function HomeStackNavigator ()  {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle:{
          backgroundColor: '#141414',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },


      }}

    >

      <HomeStack.Screen name = 'Home' component={HomeScreen}
        options = {{
          headerTitleAlign: 'center',
        }}

      />
      <HomeStack.Screen name = 'CoinDetails' component={CoinDetailsScreen}
        options={({ route }) => ({ title: route.params.coin.name,
          // headerStyle: {
          //   backgroundColor: '#3c3c3c',
          // },

        })}

      />
    </HomeStack.Navigator>
  );
}