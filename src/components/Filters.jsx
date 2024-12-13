import { StyleSheet, TextInput, View } from 'react-native'
import { Color } from '../global/myColors'

const Filters = ({keyword, setKeyWord}) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Buscar modelo...'
        placeholderTextColor='white'
        value={keyword} 
        onChangeText={setKeyWord}
      />
    </View>
  )
}

export default Filters

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'100%',
    height:60,
    justifyContent:'center',
    backgroundColor: Color.cardBG,
    alignItems:'center'
  },
  input:{
    height:40,
    width:'79%',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignContent:'center',
    color:'white',
    placeholderTextColor:'white'
  }
})