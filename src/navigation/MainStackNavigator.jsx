import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WishListScreen from '../screens/WishListScreen'
import AddCarScreen from '../screens/AddCarScreen'
import MyCollectionScreen from '../screens/MyCollectionScreen'
import CarDetailScreen from '../screens/CarDetailScreen'
import WishListSelectionScreen from '../screens/WishListSelectionScreen'
import AllCarsScreen from '../screens/AllCarsScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'


const MainStackNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
  
    <Stack.Navigator 
      initialRouteName='Home'
    >
      <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle:'Inicio', //para visualizarlo en las siguientes pantallas al volver 
        }}
      />
      <Stack.Screen 
        name='WishListScreen' 
        component={WishListScreen}
        options={
          {
            headerTitle:'Deseados',
          }
        }
      />
      <Stack.Screen 
        name='WishListSelectionScreen' 
        component={WishListSelectionScreen}
        options={
          {
            headerTitle:'Deseados'
          }
        }
      />
      <Stack.Screen 
        name='AddCar' 
        component={AddCarScreen}
        options={
          {
            headerBackButtonMenuEnabled:false,
            headerTitle:'Nuevo  auto'
          }
        }
      />
      <Stack.Screen 
        name='MyCollection' 
        component={MyCollectionScreen}
        options={
          {

            headerTitle:'Colección'
          }
        }
      />
      <Stack.Screen 
        name='CarCard' 
        component={CarDetailScreen}
        options={
          {
            headerTitle:'Detalle'
          }
        }
      />
      <Stack.Screen 
        name='AllCarsScreen' 
        component={AllCarsScreen}
        options={
          {
            headerTitle:'Todos los modelos'
          }
        }
      />
    </Stack.Navigator>
    
  )
}

export default MainStackNavigator