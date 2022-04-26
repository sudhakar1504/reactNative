import { StyleSheet, Text, View ,SafeAreaView ,Image,ScrollView,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react';
import Label from '../components/label';
import colors from '../Constant/colors';
import CategoryList from '../components/categoryList';

const Home = ({navigation}) => {
    console.log(navigation);
    const [popular,setPopular] = useState();
    const [popularDATA,setPopularDATA] = useState();
    const [ID,setID] = useState(0);

    const popularData = async()=>{
       await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list', {
            method: 'GET',
          })
            .then(response => response.json())
            .then(json => {
                setPopular(json.meals)
                console.log(json.meals);
            })
            .catch(error => {
              console.error('error');
            });
    }
    const popularDataCat = async(id)=>{
        await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`, {
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

    useEffect(() => {
        popularData();
        popularDataCat('Beef')
    }, [])
    
function GetCat(value,id){
    setID(id)
    popularDataCat(value)
    // console.log(id);
}
function getDetails(id){
    // console.log(id);
 
    const popularData = async(id)=>{
        await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
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
     popularData(id)
   
    
}
  return (
    <SafeAreaView>
     <ScrollView  style={styles.container}>
     <Text style={styles.homeTitle}>Find best recipes for cooking</Text>
     

     <View>
         <Text style={styles.popuplarLabel}>
             popular recipes
         </Text>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.horz} >
       {popular?.map((item,index)=>{
            return (
                <Label index={index} item={item} key={index} ID={ID} GetCat={GetCat}/>
               
            )
        })}
       </ScrollView>

       <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.horz}>
       {popularDATA?.map((item,index)=>{
            return (
                <CategoryList key={index} item={item} getDetails={getDetails}/>
            )
        })}
       </ScrollView>


       <Text style={styles.popuplarLabel}>
             popular recipes
         </Text>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.horz} >
       {popular?.map((item,index)=>{
            return (
                <Label index={index} item={item} key={index} ID={ID} GetCat={GetCat}/>
               
            )
        })}
       </ScrollView>

       <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.horz}>
       {popularDATA?.map((item,index)=>{
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
    container:{
        marginHorizontal : 1,
        paddingTop:20,
    },
    homeTitle:{
        fontSize : 36,
        width: '70%',
        fontWeight: '700'
    },
    popuplarLabel:{
        fontSize:25,
        marginTop:20,
        marginBottom:5,
        fontWeight:'600'
    },
    horz:{
        flexDirection:'row',
        width:'100%',
        paddingVertical:10
    },


    
})