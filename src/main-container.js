import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// import Navigator from './routes/home-route';
//screens

import HomeScreen from './screens/home-page';
import SavedScreen from './screens/saved-page';
import SearchScreen from './screens/search-page';
import SettingScreen from './screens/settings-page';
import { HomeStack, HomeStackScreen } from './routes/home-stack';
import { SearchStackScreen } from './routes/search-stack';


const Tab = createBottomTabNavigator();
const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    console.log(routeName);
    if(routeName?.includes('Article')){
        return 'none';
    }else{
        return 'flex';
    }
}


const MainContainer = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions = {
            ({route}) => ({
            tabBarIcon: ({focused,size,color})=>{
                let iconName;
                if(route.name === "Home1"){
                    iconName = focused ? 'home' : 'home-outline';
                }else if(route.name === "Search1"){
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
            <Tab.Screen name = "Home1" component = {HomeStackScreen} options = {({route}) => ({tabBarStyle: {display: getRouteName(route), backgroundColor: 'black',}})} />
            <Tab.Screen name = "Search1" component = {SearchStackScreen} />
            <Tab.Screen name = "Saved" component = {SavedScreen} />
            <Tab.Screen name = "Settings" component = {SettingScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer


