import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 


import colors from '../Constant/colors';

// import Screens
import Home from '../Screens/home';
import Category from '../Screens/Category';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';





const Tab = createBottomTabNavigator();
const Navigation = ({navigation}) => {
  return (
   
        
        <Tab.Navigator 
         
        screenOptions={({route})=>({
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                backgroundColor: colors.Primary,
                position : 'absolute',
                bottom : 20,
                left : 10,
                right : 10,
                height: 70,
                borderRadius : 25,
                
                ...styles.shadow
                

              }
            
            ],
            tabBarIcon: ({focused}) =>{
                let IconName ;
                if(route.name == 'Home'){
                    IconName = focused ? 'ios-home' : 'ios-home-outline'
                }
               
                else if(route.name == 'Search'){
                    IconName = focused ? 'search-sharp' : 'search-outline'
                }
                else if(route.name == 'Category'){
                    IconName = focused ? 'ios-fast-food-sharp' : 'ios-fast-food-outline'
                }
                // else if(route.name == 'Profile'){
                //     IconName = focused ? 'people-circle' : 'people'
                // }

                return <Ionicons name={IconName} size={focused ? 35 : 25} color={focused ? 'white' : 'black'}/>
            }
          })}
        >
      
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false } } />
        <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Tab.Screen name="Category" component={Category} options={{ headerShown: false }}/>
        {/* <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/> */}
    
      </Tab.Navigator>
   
  
  )
}

export default Navigation

const styles = StyleSheet.create({
    shadow:{
        shadowColor : 'green',
        shadowOffset :{
            width :10 ,height :10
        },
        shadowRadius : 1,
        elevation : 5,opacity :1
    }
})