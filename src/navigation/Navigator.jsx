import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigator from './BottomTabsNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSession, initSQLiteDB } from '../persistence'
import { setUser } from '../features/userSlice'
import {  useSQLiteContext} from 'expo-sqlite'


const Navigator = () => {
  
  
  const db = useSQLiteContext();
  const {user} = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  useEffect(()=>{
    (async()=>{
      try{        
        const response = await getSession(db);
        if(response){
          const user = response
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
          }))
        }
      }catch (error){
        //display Modal
        console.log({loginError: error});
      }
    })()})

  return (
    
      <NavigationContainer>
        {user ? <BottomTabsNavigator/> : <AuthStackNavigator/>}
      </NavigationContainer>
    
    
  )
}

export default Navigator

