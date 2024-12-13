import { StyleSheet, Text, View} from 'react-native'
import { Card, Button } from '@rneui/themed'
import { Color } from '../global/myColors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { usePostNewWishedCarMutation } from '../services/dbServices';


const CarCard = ({navigation, route}) => {
  const [triggerPostNewCarToWishList, result] = usePostNewWishedCarMutation()
  const {model, photo_url, series, series_num, year} = route.params
  const {user} = useSelector((state)=>state.auth.value)

  const handleAddToWishList=()=>{
    const newCar = {
      model: model,
      series: series,
      series_num : series_num,
      year: year,
      user: user,
      photo_url: photo_url
    }
    triggerPostNewCarToWishList(newCar)
  }
  
  return (
    <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>{model}</Card.Title>
          <Card.Image
            style={styles.carImg}
            source={{uri:photo_url}}
            resizeMode='contain'
          />
          <Text style={{ marginTop: 10, fontSize: 20, fontFamily:'play' }}>
            Serie: {series}
          </Text>
          <Text style={{ fontSize: 20, fontFamily:'play'  }}>
            Número: {series_num}
          </Text>
          <Text style={{marginBottom:10 , fontSize: 20, fontFamily:'play' }}>
            Año: {year}
          </Text>
          
          <Button
            onPress={()=>handleAddToWishList()}
            icon={
              <MaterialCommunityIcons name="cart-heart" color='white' size={30}/>
            }
            buttonStyle={{
              backgroundColor: Color.appBG,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
            }}
            title=" Agregar a Deseados"
          />
          
        </Card>
      </View>
  )
}

export default CarCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.appBG,
    justifyContent:'center',
    flex: 1,
  },
  card:{
    backgroundColor: Color.cardBG,
    borderColor:'black',
  },
  title:{
    color:'black',
    fontSize:30,
    fontFamily:'gruppo'
  },
  carImg:{
    padding: 0,
    height:400,
    width:'100%'
  }
})