import { Image, StyleSheet, View} from 'react-native'
import Home from '../components/Home'
import { Color } from '../global/myColors'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/img/HW-logo.png')} 
        style={styles.logo}
        resizeMode='contain'
      />
      <Home navigation={navigation}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    width:'100%',
    backgroundColor: Color.appBG,
    //justifyContent:'center',
  },
  logo:{
    height:60,
    width:'80%',
    margin: 'auto',
    marginTop:15
  }

})