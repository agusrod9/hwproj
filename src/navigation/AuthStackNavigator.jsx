import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const AuthStackNavigator = () => {

    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen 
            component={LoginScreen} 
            name='Login' 
        />
        <Stack.Screen 
            component={SignupScreen} 
            name='Signup' 
        />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({
    
})