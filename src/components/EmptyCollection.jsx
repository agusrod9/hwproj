import { View , StyleSheet, Text, Pressable} from 'react-native'
import { Color } from '../global/myColors'
import { SimpleLineIcons } from '@expo/vector-icons';

const EmptyCollection = ({navigation,user}) => {

    const goToAddCar = () =>{
        navigation.navigate('AddCar')
    }

  return (
        <View style={styles.container}>
            <Text>
                <Text style={styles.welcome}>Bienvenido </Text>
                <Text style={styles.welcomeName}>{user}</Text>
                <Text style={styles.welcome}>!</Text>
            </Text>
            <Pressable 
                style={({pressed}) => [styles.icon, {opacity: pressed ? 0.6 : 1}]}
                onPress={()=>goToAddCar()}
            >
                <SimpleLineIcons name="camera" size={200} color={Color.homeIcons}/>
                <Text style={styles.text}>Agrega tu primer auto!!!</Text>
            </Pressable>
                 
        </View>
  )
}

export default EmptyCollection

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'80%',
        flex:1,
        alignItems:'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    icon:{
        alignContent:'center',
        justifyContent:'center',
    },
    text:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        fontFamily:'gruppo'
    },
    welcome:{
        color:'white',
        fontSize:28,
        textAlign:'center',
        fontFamily:'gruppo'
    },
    welcomeName:{
        color: Color.homeIconsText,
        fontSize:28,
        textAlign:'center',
        fontFamily:'gruppo'
    }
})