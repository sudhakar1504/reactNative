import React,{useEffect} from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,SafeAreaView,Button  } from "react-native";
import colors from "./Constant/colors";
import { AntDesign } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from "./Navigation/Navigation";
import RecipeDetails from './components/RecipeDetails'
import SpecificCategory from "./Screens/SpecificCategory";

const Splash =({navigation})=>{
  const getStart = () =>{
    navigation.navigate('Main')
  }
 return(
  <View style={styles.container}>
  <ImageBackground source={{uri: 'https://i.pinimg.com/564x/90/28/92/902892c349915425b849fd579be2cf6a.jpg'}} resizeMode="cover" style={styles.image}>
  <View style={styles.bottomContainer}>
    <Text style={styles.Titles}>Let's </Text>
    <Text style={styles.Titles}>Cooking</Text>
    <Text style={styles.singleDescrition}>Find best recipes for cooking</Text>
    <TouchableOpacity style={styles.start} activeOpacity={0.9} onPress={getStart}>
      <Text style={styles.BtnText}>Start Cooking</Text>
      <AntDesign name="arrowright" size={30} color={colors.white} />
      </TouchableOpacity>

  </View>
  </ImageBackground>
</View>
 )
}

const Stack = createNativeStackNavigator();



const App = () => (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Splash} options={{ headerShown: false }}/>
    <Stack.Screen name="Main" component={Navigation} options={{ headerShown: false }}/>
    <Stack.Screen name="Specific" component={SpecificCategory} options={{ headerShown: false }}/>
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="MyModal" component={RecipeDetails} options={{ headerShown: false }}/>
      </Stack.Group>  
  </Stack.Navigator>
  
      
</NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
  },
  image: {
    flex: 1,
    justifyContent:'flex-end'
  },
  bottomContainer:{
    alignItems:'center'
  },
  Titles:{
    fontSize: 70,
    marginVertical:3,
    fontWeight: '800',
    fontFamily: 'Arial',
    color:colors.white
  },
  singleDescrition:{
    color: colors.white,
    marginVertical:30,
    fontSize: 18
  },
  start:{
    backgroundColor: colors.Primary,
    paddingVertical : 15,
    paddingHorizontal : 60,
    borderRadius :10,
    marginBottom:80,
    flexDirection: 'row',
    alignItems: 'center'

  },
  BtnText:{
    fontSize:30,
    color:colors.white,
    fontWeight : '500',
    marginRight: 10
  }
});

export default App;