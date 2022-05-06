import { StyleSheet, Text, View ,SafeAreaView,TextInput,Keyboard,TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import colors from '../Constant/colors';
import CategoryList from '../components/categoryList';


const Search = ({navigation}) => {
const[inputValue,setInputValue]= useState("");
const[searchData,setSearchData] = useState([]);

const[searchError,setSearchError]= useState("Search Your Recipes ");

const getResult =()=>{
  
  Keyboard.dismiss();
  // setSearchData([]);
  const SearchData = async()=>{
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`, {
         method: 'GET',
       })
         .then(response =>response.json())
         .then(json => {
        //  console.log(json);
            // console.log(response);
            setSearchData(json.meals)
            // console.log(searchData);
         })
         .catch(error => {
           console.error('error');
         });
 }
 const SearchData_by_FL = async()=>{
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`, {
       method: 'GET',
     })
       .then(response =>response.json())
       .then(json => {
      //  console.log(json);
          // console.log(response);
          
            setSearchData(json.meals)
          
       })
       .catch(error => {
         console.error('error');
       });
}
 if(inputValue.length > 0){
  SearchData()
  setSearchError("No recipe found")
 }
 if(inputValue.length == 1){
  SearchData_by_FL();
  setSearchError("No recipe found")
 }
}
function getDetails(id){
  // console.log(id);

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
  return (
    <SafeAreaView style={styles.search_continer}>
    
    <View style={styles.inputContainer}>
       <TextInput placeholder='Search recipes' placeholderTextColor='#737373' keyboardAppearance='light' style={styles.textInput} value={inputValue} onChangeText={(value)=> setInputValue(value)}/>

<TouchableOpacity style={styles.search_btn} activeOpacity={0.8} onPress={getResult}>
 <Ionicons name='search-sharp' style={styles.btn_text}/>
  </TouchableOpacity>    
</View>
 
<ScrollView style={styles.searchItem}>

<View style={styles.SearchGrid}>
{searchData?.length > 0 ? searchData.map((item,index)=>{
  return(
    <View key={index} style={styles.itemHolder}>
      <CategoryList  item={item} getDetails={getDetails}/>
      </View>
  )
}) : <Text style={styles.searchTitle}>{searchError}</Text>}
</View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  search_continer:{
    flex:1,
    alignItems:'center',
    backgroundColor:'black'
  },
  inputContainer:{
    width: 300,
    paddingVertical:0,
    alignItems:'center',
    borderColor:'#404040',
    borderRadius:10,
    borderWidth:1,
    marginVertical:50,
    flexDirection:"row"
  },
  textInput:{
    width:'80%',
    height:40,
    paddingHorizontal:10,
    color:colors.Primary,
    fontWeight:'500',
    fontSize:20,
    color:colors.white,
    
  },
  search_btn:{
    backgroundColor:colors.Primary,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    borderBottomEndRadius:10,
    borderTopEndRadius:10
  },
  btn_text:{
    color:'white',
    fontSize:22,
  },
  searchItem:{
    width:'100%',
  },
  SearchGrid:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-around',
    paddingBottom:120
  },
  itemHolder:{
    marginVertical:6
  },
  searchTitle:{
    fontSize:20,
    fontWeight:'600',
    color:colors.white
  }
})
