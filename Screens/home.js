import { StyleSheet, Text, View ,SafeAreaView ,Image,ScrollView,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react';
import Label from '../components/label';
import colors from '../Constant/colors';
import CategoryList from '../components/categoryList';

import API from '../API'
import MenuCategory from '../components/MenuCategory';

const Home = ({navigation}) => {

  const Category_DAta = API.FETCHCATEGORYDATA();
    // console.log(navigation);
    const [popular,setPopular] = useState();
    const [popularDATA,setPopularDATA] = useState();

    const [bestCountry,setBestCountry] = useState();
    const [bestCountryData,setBestCountryData] = useState();
    

    const [ID,setID] = useState(0);
    const [countryID,setCountryID] = useState(0);


    let scrollX = 0;

const[categoryData,setCategoryData] = useState();
    const fetchCategory = async () => {
      try {
        const Data = await Category_DAta;
       
        setCategoryData(Data.categories)
        // console.log(Data.categories);
      } catch (err) {

      }
    };
 
    const popularData = async(id)=>{
       await fetch(id, {
            method: 'GET',
          })
            .then(response => response.json())
            .then(json => {
                setPopular(json.meals)
                 return json.meals
            })
            .catch(error => {
              return error
            });
    }
    const popularDataCat = async(id)=>{
        await fetch(id, {
             method: 'GET',
           })
             .then(response => response.json())
             .then(json => {
                setPopularDATA(json.meals)
                //  console.log(json);
             })
             .catch(error => {
               console.error('error');
             });
     }
     const CountryData = async(id)=>{
      await fetch(id, {
           method: 'GET',
         })
           .then(response => response.json())
           .then(json => {
            setBestCountry(json.meals)
                return json.meals
           })
           .catch(error => {
             return error
           });
   }
   const CountryDataList = async(id)=>{
       await fetch(id, {
            method: 'GET',
          })
            .then(response => response.json())
            .then(json => {
              setBestCountryData(json.meals)
               //  console.log(json);
            })
            .catch(error => {
              console.error('error');
            });
    }
    useEffect(() => {
      fetchCategory()
      console.log(categoryData);
       popularData('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
       popularDataCat(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)

       CountryData('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
       CountryDataList(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
    }, [])
    
function GetCat(value,id){
    setID(id)
    popularDataCat(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
    scrollX = 0
    // console.log(id);
}
function GetCountry(value,id){
  setCountryID(id)
  CountryDataList(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
  // console.log(id);
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
    <SafeAreaView style={styles.heading}>
     <ScrollView  style={styles.container}>
     <Text style={styles.homeTitle}>Find best recipes for cooking</Text>
     
<MenuCategory categoryData={categoryData} navigation={navigation}/>

     <View style={styles.paddings}>
         <Text style={styles.popuplarLabel}>
             popular recipes
         </Text>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.horz} >
       {popular?.map((item,index)=>{
            return (
                <Label index={index} item={item.strCategory} key={index} ID={ID} GetCat={GetCat}/>
               
            )
        })}
       </ScrollView>

       <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.horz} contentOffset={{x:scrollX,y:0}} snapToStart={true}>
       {popularDATA?.map((item,index)=>{
            return (
                <CategoryList key={index} item={item} getDetails={getDetails}/>
            )
        })}
       </ScrollView>


       <Text style={styles.popuplarLabel}>
             Best countries
         </Text>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.horz} >
       {bestCountry?.map((item,index)=>{
            return (
                <Label index={index} item={item.strArea} key={index} ID={countryID} GetCat={GetCountry}/>
               
            )
        })}
       </ScrollView>

       <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.horz}>
       {bestCountryData?.map((item,index)=>{
            return (
                <CategoryList key={index} item={item} getDetails={getDetails}/>
            )
        })}
       </ScrollView>

     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  heading:{
backgroundColor:colors.white,
  },

    container:{
        marginHorizontal : 1,
        paddingTop:20,
        paddingHorizontal:10,
        backgroundColor:colors.white
    },
    paddings:{
      paddingBottom:120
    },
    homeTitle:{
        fontSize : 36,
        width: '70%',
        fontWeight: '700',
        color:colors.black
    },
    popuplarLabel:{
        fontSize:25,
        marginTop:20,
        marginBottom:5,
        color:colors.black,
        fontWeight:'600'
    },
    horz:{
        flexDirection:'row',
        width:'100%',
        paddingVertical:10
    },


    
})