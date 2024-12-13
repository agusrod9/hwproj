import { StyleSheet, View } from 'react-native'
import Filters from '../components/Filters'
import CarList from '../components/CarList'
import { Color } from '../global/myColors'
import { useState, useEffect } from 'react'
import { useGetCarsQuery } from '../services/dbServices'

const AllCarsScreen = ({navigation}) => {
  const {data, isLoading} = useGetCarsQuery()
  const [keyword, setKeyword] = useState('')
  const [filteredCars, setFilteredCars] = useState([])
  
  useEffect(()=>{
    if(!isLoading){
      const filtered = data.filter(
        (car) => car.model.toLocaleString().toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
      setFilteredCars(filtered)
    }
    }, [keyword, setKeyword, data, isLoading])
  return (
    <View style={styles.container}>
      <Filters keyword={keyword} setKeyWord={setKeyword}/>
      <CarList navigation={navigation} data={filteredCars}/>
    </View>
  )
}

export default AllCarsScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:Color.appBG,
    flex: 1,
    alignContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  }
})