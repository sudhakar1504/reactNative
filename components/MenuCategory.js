import { StyleSheet, Text, View ,ScrollView,ImageBackground, TouchableOpacityBase,TouchableOpacity} from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import API from '../API';
import colors from '../Constant/colors';

const MenuCategory = ({categoryData,navigation}) => {

const GoToCategory = (id)=>{

    const FetchSpecificCategory_Data = async(id)=>{
        try {
            const Data = await API.FETCHSPECIFIC(id);
           
            navigation.navigate('Specific',{
                data:Data.meals,
                name:id
            })
            // console.log("dahsjkdhjasdhjaksdh");
            // console.log(Data.meals);
          } catch (err) {
    
          }
    }
    FetchSpecificCategory_Data(id)
}

  return (
    <ScrollView horizontal style={styles.MenuContainer} showsHorizontalScrollIndicator={false} contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
       
{categoryData?.map((item,index)=>{
    return(
        <View style={styles.menuAlign} key={index}>
       <TouchableOpacity activeOpacity={0.8} onPress={()=>GoToCategory(item.strCategory)}>
       <ImageBackground source={{uri:`${item.strCategoryThumb}`}} resizeMode='cover' style={styles.BackgroundImage}>
        <View style={styles.TextBG}>
<Text style={styles.Title}>{item.strCategory}</Text>
<Text style={styles.Review}>4.5<AntDesign name="star" size={17} color="white"/>  |  239 Reviews</Text>
        </View>

        </ImageBackground>
       </TouchableOpacity>
       </View>
    )
})}
      
    </ScrollView>
  )
}

export default MenuCategory

const styles = StyleSheet.create({
    MenuContainer:{
        width:'100%',
        height:200,
        marginTop:30,
    },
    menuAlign:{
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:25,
        padding:10,
        
        
    },
    BackgroundImage:{
        width: 300,
        height:200,
        backgroundColor:colors.ImageBG,
        borderRadius:20,
    },
    TextBG:{
        // backgroundColor:'rgba(0,0,0,0.25)',
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        padding:20,
        borderRadius:20,
        
    },
    Title:{
        fontSize:30,
        fontWeight:'700',
        color:colors.white,
    },
    Review:{
        color:colors.white,
        fontSize:16,
        opacity:0.7,
        fontWeight:'500'
    }
})