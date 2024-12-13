import { View , StyleSheet, FlatList, Text, Image, Pressable} from 'react-native'
import { Color } from '../global/myColors'

const CarList = ({navigation, data}) => {
    
const goToCarCard = (item) =>{
    navigation.navigate('CarCard', item )
}

  return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                style={styles.lista}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>
                    <Pressable 
                        style={({pressed}) => [{opacity: pressed ? 0.6 : 1}]}
                        onPress={()=> goToCarCard(item)}
                    >
                            <View style={styles.card}>
                                <Image 
                                    source={{uri: item.photo_url}}
                                    style={styles.img}
                                    resizeMode='contain'
                                    />
                                <Text style={styles.modelo}>{item.model}</Text>
                            </View>
                    </Pressable>
                }
            />
        </View>
  )
}

export default CarList

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'80%',
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    lista:{
        width:'100%',
        padding:20,
        alignContent:'space-evenly',
    },
    card:{
        backgroundColor:Color.cardBG,
        flex:1,
        width:'90%',
        height:150,
        borderColor:'black',
        borderRadius:15,
        borderWidth:1,
        padding:8,
        justifyContent:'center',
        margin: 'auto', //centro las cards
        marginBottom:15 //las separo
    },
    img:{
        height:'90%',
        //width:'100%',
        //resizeMode:'contain' -> Deprecado, lo paso a prop
    },
    modelo:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontFamily:'gruppo'
    }
})