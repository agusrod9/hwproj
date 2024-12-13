import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import AddCarScreen from '../screens/AddCarScreen'
import WishListScreen from '../screens/WishListScreen'
import MainStackNavigator from './MainStackNavigator'
import { Color } from '../global/myColors'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen'


const tabs = createBottomTabNavigator()

const BottomTabsNavigator = () => {
  return (
    <tabs.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:styles.tabBar,
        headerShown:false
      }
      }  
    >
      <tabs.Screen 
            name='tabMain'
            component={MainStackNavigator} 
            options={{ tabBarLabel:'Inicio',
                       tabBarIcon: ({focused}) => {
                          return(
                              <MaterialCommunityIcons name="garage" size={focused ? 55 : 50} color={ focused ? Color.homeIconsText : 'white'} />
                          )
                        }
                      }
              }
        /> 
      <tabs.Screen 
            name='tabAddCar' 
            component={AddCarScreen} 
            options={{ tabBarLabel:'Agregar Auto',
                       tabBarIcon: ({focused}) => {
                        return(
                          <SimpleLineIcons name="camera" size={focused ? 45 : 40} color={ focused ? Color.homeIconsText : 'white'}/>
                        )
                      }
                    }
            }
        />
      <tabs.Screen 
            name='tabWishListScreen' 
            component={WishListScreen} 
            options={{ tabBarLabel:'Deseos',
                       tabBarIcon: ({focused}) => {
                        return(
                          <MaterialCommunityIcons name="cart-heart" size={focused ? 45 : 40} color={focused ? Color.homeIconsText : 'white'}/>
                        )
                      }}}
        /> 
        <tabs.Screen 
            name='LogOut' 
            component={ProfileScreen} 
            options={{ tabBarLabel:'Perfil',
                       tabBarIcon: ({focused}) => {
                        return(
                          <SimpleLineIcons name="user" size={focused ? 40 : 35} color={focused ? Color.homeIconsText : 'white'} />
                        )
                      }}}
        /> 
    </tabs.Navigator>
  )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:Color.appBG,
    height:50
  }
})
