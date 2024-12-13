import { StyleSheet, View, Pressable, Text } from 'react-native'
import { Color } from '../global/myColors'

const WishListSelector = ({navigation}) => {

const goToWishList = () => {
  navigation.navigate('WishListScreen')
}

const goToAllCarsScreen = () => {
  navigation.navigate('AllCarsScreen')
}

  return (
    <View style={styles.container}>
      <Pressable 
        style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
        onPress={()=> goToWishList()}
      >
          <Text style={styles.txt}>Mis deseados</Text>
      </Pressable>

      <Pressable 
        style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
        onPress={()=> goToAllCarsScreen()}
      >
        <Text style={styles.txt}>Ver todos los modelos</Text>
      </Pressable>
    </View>
  )
}

export default WishListSelector

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.appBG,
    justifyContent:'space-evenly',
    alignItems:'center',
    flex: 1,
    flexDirection:'column',
    
  },
  pressable: {
    margin:0,
    padding:0,
    backgroundColor: Color.cardBG,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 35,
    minHeight:'48%',
    minWidth:'95%',
    //marginTop:50
    justifyContent:'center',
    alignItems:'center',
  },
  txt:{
    fontSize:30,
    color: Color.homeIconsText,
    fontFamily:'gruppo'
  }
})