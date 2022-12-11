import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

//screens

import HomeScreen from './screens/home-page';
import SavedScreen from './screens/saved-page';
import SearchScreen from './screens/search-page';
import SettingScreen from './screens/settings-page';


const Tab = createBottomTabNavigator();


const MainContainer = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions = {
            ({route}) => ({
            tabBarIcon: ({focused,size,color})=>{
                let iconName;
                if(route.name === "Home"){
                    iconName = focused ? 'home' : 'home-outline';
                }else if(route.name === "Search"){
                    iconName = focused ? 'search' : 'search-outline';
                }else if(route.name === "Saved"){
                    iconName = focused ? 'save' : 'save-outline';
                }else if(route.name === "Settings"){
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <Ionic name = {iconName} size = {size} color = {color} />;
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
                height: Dimensions.get('window').width *0.15,
                 backgroundColor: 'black',
                 paddingHorizontal: 5,
                 paddingBottom: 5,
                //  position: 'absolute',
                 }
        })}
        
        
        >
            <Tab.Screen name = "Home" component = {HomeScreen} />
            <Tab.Screen name = "Search" component = {SearchScreen} />
            <Tab.Screen name = "Saved" component = {SavedScreen} />
            <Tab.Screen name = "Settings" component = {SettingScreen} />
        </Tab.Navigator>
                
               
    </NavigationContainer>
  )
}

export default MainContainer


