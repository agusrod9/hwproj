import { Pressable, StyleSheet, View, Text } from 'react-native'
import { MaterialIcons , MaterialCommunityIcons , SimpleLineIcons } from '@expo/vector-icons';
import { Color } from '../global/myColors';

const Home = ({navigation}) => {

const goToAddCar = () =>{
  navigation.navigate('AddCar')
}

const goToMyCollection = () =>{
  navigation.navigate('MyCollection')
}

const goToMyWishList = () => {
  navigation.navigate('WishListSelectionScreen')
}
  return (
    <View style={styles.container}>
      <Pressable 
        style={({pressed}) => [styles.icon, {opacity: pressed ? 0.6 : 1}]}
        onPress={()=>goToAddCar()}
      >
        <SimpleLineIcons name="camera" size={90} color={Color.homeIcons}/>
        <Text style={styles.iconText}>Agregar auto</Text>
      </Pressable>

      <Pressable 
        style={({pressed}) => [styles.icon, {opacity: pressed ? 0.6 : 1}]}
        onPress={()=>goToMyCollection()}
      >
        <MaterialIcons name="grid-view" size={90} color={Color.homeIcons}/>
        <Text style={styles.iconText}>Ver colección</Text>
      </Pressable>

      <Pressable 
        style={({pressed}) => [styles.icon, {opacity: pressed ? 0.6 : 1}]}
        onPress={()=>goToMyWishList()}
      >
        <MaterialCommunityIcons name="cart-heart" size={90} color={Color.homeIcons}/>
        <Text style={styles.iconText}>Deseos</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  icon:{
    margin: 40,
    alignContent:'center',
    justifyContent:'center',
  },
  iconText:{
    color: Color.homeIconsText,
    textAlign:'center',
    fontSize:16,
    fontFamily: 'gruppo'
  }
})