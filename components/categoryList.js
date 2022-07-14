import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import colors from '../Constant/colors';
const CategoryList = ({item,getDetails}) => {
  return (
                <TouchableOpacity  style={styles.card} onPress={()=> getDetails(item.idMeal)}>
                    <Image source={{uri: item.strMealThumb}} resizeMode="contain" style={styles.thumbNail}/>
                    <Text numberOfLines={2} style={styles.cardTitle}>{item.strMeal}</Text>
                </TouchableOpacity>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    card:{
        width : 130,
        height : 180,
        // backgroundColor : 'yellow',
        marginHorizontal:13,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    thumbNail:{
        width:'100%',
        height: 140,
        borderRadius:25
    },
    cardTitle:{
        fontSize:18,
        fontWeight:'700',
        width: '90%',
        marginVertical:5,
        color:colors.black
    }
})