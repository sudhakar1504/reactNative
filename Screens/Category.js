import { StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity,Image,RefreshControl} from 'react-native'
import React,{useState,useEffect} from 'react'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import colors from '../Constant/colors';
const Category = ({navigation}) => {
const[categoryData,setCategorydata] = useState([]);
const [refreshing, setRefreshing] = useState(false);
  const CategoryPageData = async(id)=>{
    await fetch(id, {
         method: 'GET',
       })
         .then(response => response.json())
         .then(json => {
          setCategorydata(json.meals)
          setRefreshing(false);
         })
         .catch(error => {
           console.error('error');
         });
 }
 useEffect(()=>{
  CategoryPageData(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
 },[])
 const getDetail =(id)=>{
  console.log(id);
  const popularData = async(id)=>{
    await fetch(id, {
         method: 'GET',
       })
         .then(response => response.json())
         .then(json => {
            navigation.navigate('MyModal',{
            itemId: json.meals
  })
         })
         .catch(error => {
           console.error('error');
         });
 }
 popularData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
}
const onRefresh = React.useCallback(async () => {
  setRefreshing(true);
  const arr = ['a','b','c','m','d','l','p','s','r','t','n','v'];
  var random = Math.floor(Math.random(arr.length * 1) * arr.length)
  CategoryPageData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${arr[random]}`)
}, [refreshing]);
  return (
    <SafeAreaView style={styles.specific_container}>
    <ScrollView showsVerticalScrollIndicator="false" refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  tintColor={colors.white}/>
        }>
    <View style={styles.Container} >
        <View style={styles.card_Holder}>
    
     {categoryData?.map((item,index)=>{
       return(
      
        <TouchableOpacity style={styles.Card_MainContainer} key={index} activeOpacity={0.7} onPress={()=> getDetail(item.idMeal)}>
        <View style={styles.sub_container}>
    
    <View style={styles.image_holder}>
     <View style={styles.Image_shadow}>
     <Image source={{uri:`${item.strMealThumb}`}} resizeMode="cover" style={styles.card_image}/>
     </View>
    </View>
    
    <View>
      <Text style={styles.card_name} numberOfLines={2}>{item.strMeal}</Text>
    </View>
    <View style={styles.review_rating}>
    <Text style={styles.rating}>4.5<AntDesign name="star" size={15} color="gold"/></Text>
    <Text style={styles.review}>186 Reviews</Text>
    </View>
    </View>
        </TouchableOpacity>
        
        
       )
     })}
     </View>
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Category

const styles = StyleSheet.create({
  specific_container:{
    paddingHorizontal:4,
    flex:1,
    backgroundColor:colors.black
  },
    Container:{
        flex:1,
        paddingHorizontal:10
    },
  card_Holder:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:"center",
    justifyContent:"space-between",
    paddingBottom:'50%'
  },
  Card_MainContainer:{
    // backgroundColor:"lightblue",
    width:'48%'
  },
  sub_container:{
    backgroundColor:'#e6e6e6',
    marginTop:'50%',
    height:190,
    justifyContent:"flex-end",
    alignItems:"center",
    borderRadius:20
  },
  image_holder:{
    position:'absolute',
    top:'-30%',
    width:'80%',
    alignItems:"center",
    backgroundColor:'#e6e6e6',
    borderRadius:100,
    padding:15,
    shadowOffset:{
      width:0,
      height:2
    },
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowRadius:5,
    elevation:6
  },
  Image_shadow:{
    width:'100%',
    shadowOffset:{
      width:0,
      height:-2
    },
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowRadius:2,
  },
  card_image:{
    width:'100%',
    height:110,
    borderRadius:100,
    
   
  },
  card_name:{
    fontSize:20,
    fontWeight:'600',
    paddingHorizontal:5,
    marginVertical:25,
    opacity:0.7
  },
  review_rating:{
    flexDirection:"row",
    width:'100%',
    alignItems:"center",
    justifyContent:"space-around",
    marginVertical:8
  },
  rating:{
    opacity:0.6
  },
  review:{
    opacity:0.4,
    fontSize:14,
    fontWeight:'500'
  }
})