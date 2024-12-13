import CarCard from '../components/CarCard'

const CarDetailScreen = ({navigation, route, displayBtn}) => {
  
  return (
    <CarCard navigation={navigation} route= {route}/>
  )
}

export default CarDetailScreen