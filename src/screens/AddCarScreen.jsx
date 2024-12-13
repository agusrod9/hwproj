import { StyleSheet, View } from 'react-native'
import AddCarForm from '../components/AddCarForm'
import AddCarImgSelection from '../components/AddCarImgSelection'
import { Color } from '../global/myColors'

const AddCarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AddCarImgSelection/>
      <AddCarForm/>
    </View>
  )
}

export default AddCarScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-evenly',
    backgroundColor: Color.appBG
  }
})