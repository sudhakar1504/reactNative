import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import React, { useState ,useRef} from 'react'
import colors from '../Constant/colors';

const Label = ({index,item,ID,GetCat}) => {
    

  return (
    <TouchableOpacity  style={[index === ID ? styles.labelActive : styles.label,]} onPress={()=> {GetCat(item,index)}}>

    <Text style={[index === ID ? styles.lableTextActive : styles.lableText,]}>{item}</Text>
</TouchableOpacity>
  )
}

export default Label

const styles = StyleSheet.create({
    label:{
        fontSize:20,
        marginHorizontal :2,
        paddingVertical:4,
        paddingHorizontal :15
    },
    labelActive:{
        fontSize:20,
        marginHorizontal :2,
        paddingVertical:4,
        paddingHorizontal :15,
        backgroundColor:colors.Primary,
        borderRadius:10
    },
    lableText:{
        color: colors.white,
        fontSize:22,
        fontWeight:'500'
    },
    lableTextActive:{
        fontSize:22,
        color: colors.white,
        fontWeight:'500'
    }
})