import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../global/myColors'
import { truncateSessionTable } from '../persistence'
import { useDispatch } from 'react-redux'
import { clearUser } from '../features/userSlice'
import { useSQLiteContext } from 'expo-sqlite'

const ProfileScreen = () => {
const db = useSQLiteContext();
const dispatch = useDispatch()

    const logOut= async ()=>{
        try {
            truncateSessionTable(db)
            dispatch(clearUser())
        } catch (error) {
            //display Modal
        }
         
    }

  return (
    <View style={styles.container}>
        <Pressable style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]} onPress={()=>{logOut()}}>
            <Text style={styles.txtPressable}>Logout</Text>
        </Pressable>
      
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.appBG,
        flex: 1,
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    pressable:{
        marginTop:10,
        backgroundColor: Color.cardBG,
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 7,
        borderRadius: 5
    },
    txtPressable:{
        color:'white',
        fontFamily:'play' 
    }
})