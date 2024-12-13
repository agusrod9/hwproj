import { StyleSheet, View } from 'react-native'
import Filters from '../components/Filters'
import CarList from '../components/CarList'
import { Color } from '../global/myColors'
import { useEffect, useState } from 'react'
import { useGetCollectedCarsByUserQuery } from '../services/dbServices'
import EmptyCollection from '../components/EmptyCollection'
import { useSelector } from 'react-redux'

const MyCollectionScreen = ({navigation}) => {

  const {user} = useSelector((state) => state.auth.value)
  const {data, isLoading} = useGetCollectedCarsByUserQuery(user)
  const [keyword, setKeyword] = useState('')
  const [filteredCars, setFilteredCars] = useState([])
  const [cantidadAutos, setCantidadAutos] = useState(0)

  useEffect(()=>{
    if(!isLoading){
      setCantidadAutos (data.length)
      const filtered = data.filter(
        (car) => car.model.toLocaleString().toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
      setFilteredCars(filtered)
    }
    }, [keyword, setKeyword, data, isLoading])

  return (
    <View style={styles.container}>
      { cantidadAutos !=0 || isLoading ?
      <Filters keyword={keyword} setKeyWord={setKeyword}/>
      :
      <></>}
      
      { cantidadAutos !=0 || isLoading ? <CarList navigation={navigation} data={filteredCars}/> : <EmptyCollection navigation={navigation} user={user}/>}
    </View>
  )
}

export default MyCollectionScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.appBG,
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
})