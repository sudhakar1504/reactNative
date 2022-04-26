import { StyleSheet, Text, View ,ScrollView,Image,ImageBackground, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react';
import { AntDesign } from '@expo/vector-icons';

const RecipeDetails = ({route,navigation}) => {
  const[instruction,setInstruction] = useState(8)
    const { itemId } = route.params;
    // console.log(itemId[0]);
   
    let IngredientName =[];
    let Measure=[]
    for (let i = 0; i < 20; i++) {
      let Iname = 'strIngredient'+(i+1).toString()
      let Mname = 'strMeasure'+(i+1).toString()
      // console.log(itemId[0][names]);
      if(itemId[0][Iname]?.length>2){

        IngredientName.push(itemId[0][Iname])
      }
      if(itemId[0][Mname]?.length > 1){

        Measure.push(itemId[0][Mname])
      }
      
    }
    console.log(IngredientName);
    console.log(Measure);
    // setIngredents(IngredientName)
    // console.log(ingredents);
function readMore(){
  setInstruction(instruction == 8 ? 0 : 8)
}
  return (
    <ScrollView style={styles.detailsContainer}>
     <View style={styles.mealsContainer}>
     <Text style={styles.mealName}>{itemId[0].strMeal}</Text>
    <View style={styles.imageContainer}>
    <Image source={{uri: itemId[0].strMealThumb}} style={styles.backgroundImage} resizeMode={'cover'} />
    </View>

    <View style={styles.reviewAndRating}>
      <Text style={styles.rating}><AntDesign name="star" size={25} color="gold"/><Text style={styles.ratingText}>4.5</Text></Text>
      <Text style={styles.review}>(259 reviews)</Text>
    </View>

    <View style={styles.ingredientsContainer}>
      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <Text style={styles.no_ofItem}>{Measure.length} Items</Text>
    </View>

    <View style={styles.mainCard}>
      {Measure.map((item,index)=>{
        
          return (
            <View key={index}  style={styles.ingredientCard}>
  
              <View style={styles.cardThumbConatiner}>
                <Image source={{
      uri: `https://www.themealdb.com/images/ingredients/${IngredientName[index]}-Small.png`
    }} resizeMode="contain" style={styles.CardImage}/>
    <Text style={styles.CardTitle} numberOfLines={0}>{IngredientName[index]}</Text>
              </View>
              <Text style={styles.measureText}>{item}</Text>
  
            </View>
          )
        
      })}
    </View>

    <View style={styles.InstructionContainer}>
      <Text style={styles.InstructionHeading}>Instruction</Text>
    <Text numberOfLines={instruction} style={styles.instructionText}>{itemId[0].strInstructions}</Text>
    <TouchableOpacity onPress={readMore} style={styles.readMore}><Text style={styles.readMoreText}>{instruction == 0 ? 'less more' : 'Read more'}</Text></TouchableOpacity>
    </View>
     </View>
    </ScrollView>
  )
}

export default RecipeDetails

const styles = StyleSheet.create({
  detailsContainer:{
    flex :1,
    paddingHorizontal:15,
    paddingTop:30,
    marginTop:40
  },
  mealsContainer:{
    paddingVertical:10
  },
  mealName:{
    fontSize:36,
    fontWeight:'700',
    paddingLeft:10
  },
  imageContainer:{
    width:'100%',
    alignItems:'center',
    marginVertical:24,
    shadowColor:'black',
    shadowOpacity:0.4,
    shadowRadius:20,
    shadowOffset:{
      width:10,height:20
    }
  },
  backgroundImage: {
    width:'98%',
    height:220,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
    
  },
  reviewAndRating:{
    flexDirection :'row',
    alignItems:'center',
    marginVertical :10
  },
  rating:{
    alignItems:'center',
    marginHorizontal:10,
    },
    ratingText:{
      fontSize:20,
    },
    review:{
      color:'grey',
      fontSize:17,
      opacity:0.7
    },
    ingredientsContainer:{
      width:'90%',
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:'row',
      marginVertical:10
    },


    no_ofItem:{
      fontSize:20,
      fontWeight:'600',
      color:'grey'
    },
    ingredientsTitle:{
      fontSize:30,
      fontWeight:'600'
    },



    mainCard:{
width:'100%',
paddingBottom:30
    },
    ingredientCard:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      backgroundColor:'#0000000d',
      paddingHorizontal:20,
      paddingVertical:8,
      marginVertical:5,
      borderRadius:10,
      borderBottomColor:'#00000014',
      borderBottomWidth:3,
    },

    CardImage:{
      width:70,
      height:70,
      marginRight:10,
      backgroundColor:'white',
      borderRadius:10
    },
    cardThumbConatiner:{
      flexDirection:'row',
      alignItems:'center'
    },
    CardTitle:{
      fontSize:18,
      width:'50%',
      fontWeight:'600'
    },
    measureText:{
      fontSize:14,
      paddingRight:10,
      color:'grey',
      width:'30%',
      fontWeight:'600',
      opacity:0.7,
      textAlign:'right'
    },

    InstructionContainer:{
      paddingBottom:80,
    },
    InstructionHeading:{
      fontSize:26,
      marginBottom:10,
      fontWeight:'600'
    },
    instructionText:{
      fontSize:20,
      lineHeight:30
    },
    readMore:{
      marginVertical:5
    },
    readMoreText:{
      fontSize:20,
      fontWeight:'600',
      opacity:0.8
    }
})