import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';


const AuthStack  = createNativeStackNavigator();

export default function AuthStackNavigator() {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login'  component={LoginScreen}/>
      <AuthStack.Screen name='Sign up' component={SignUpScreen}/>
    </AuthStack.Navigator>
  );

}